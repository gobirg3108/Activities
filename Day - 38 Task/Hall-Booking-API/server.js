const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let rooms = [];
let bookings = [];
let bookingIdCounter = 1;

// Helper functions

const isRoomAvailable = (roomId, date, startTime, endTime) => {
  return !bookings.some(
    (booking) =>
      booking.roomId === roomId &&
      booking.date === date &&
      ((startTime >= booking.startTime && startTime < booking.endTime) ||
        (endTime > booking.startTime && endTime <= booking.endTime))
  );
};

// 1. Create a Room

app.post("/rooms", (req, res) => {
  const { numberOfSeats, amenities, pricePerHour } = req.body;
  const roomId = rooms.length + 1;
  const newRoom = { roomId, numberOfSeats, amenities, pricePerHour };
  rooms.push(newRoom);
  res.status(201).json(newRoom);
});

// 2. Book a Room

app.post("/bookings", (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;
  if (!isRoomAvailable(roomId, date, startTime, endTime)) {
    return res
      .status(400)
      .json({ message: "Room is already booked for the specified time." });
  }
  const newBooking = {
    bookingId: bookingIdCounter++,
    customerName,
    date,
    startTime,
    endTime,
    roomId,
  };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

// 3. List all Rooms with Booked Data

app.get("/rooms", (req, res) => {
  const roomsWithBookings = rooms.map((room) => {
    const roomBookings = bookings.filter(
      (booking) => booking.roomId === room.roomId
    );
    return {
      ...room,
      bookings: roomBookings.map((booking) => ({
        customerName: booking.customerName,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
      })),
    };
  });
  res.json(roomsWithBookings);
});

// 4. List all Customers with Booked Data

app.get("/customers", (req, res) => {
  const customersWithBookings = bookings.map((booking) => ({
    customerName: booking.customerName,
    roomId: booking.roomId,
    date: booking.date,
    startTime: booking.startTime,
    endTime: booking.endTime,
  }));
  res.json(customersWithBookings);
});

// 5. List how many times a customer has booked the room

app.get("/customers/:customerName/bookings", (req, res) => {
  const { customerName } = req.params;
  const customerBookings = bookings
    .filter((booking) => booking.customerName === customerName)
    .map((booking) => ({
      customerName: booking.customerName,
      roomId: booking.roomId,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
      bookingId: booking.bookingId,
      bookingDate: booking.bookingDate,
      bookingStatus: "confirmed",
    }));
  res.json(customerBookings);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
