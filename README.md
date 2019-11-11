# API for Booking System

This is an API for the room booking system being developed at Legacy School Bangalore.

## Rooms
- GET `/api/rooms`
  - Returns all the rooms in the system
- POST `/api/rooms`
  - Create a new room.
  - **Parameters**
    - `name`: The name of the room to be created
- PUT `/api/rooms/:id`
  - Update a given room by its ID.
  - **Parameters**
    - `name`: The new name of the room.
- DELETE `/api/rooms/:id`
  - Delete a given room by its ID.

## Teachers
- GET `/api/teachers`
  - *DEBUGGING ROUTE*
  - Returns all the teachers in the database.
- POST `/api/teachers`
  - *DEBUGGING ROUTE*
  - Create a new teacher in the database.
  - **Parameters**
    - `name`: The name of the teacher.
    - `email`: The email of the teacher.

## Bookings
*All the below routes need a teacher ID passed in as a query parameter. This is subject to change once authentication is implemented.*
- GET `/api/bookings?teacher=<ID>`
  - Gets all the bookings by a specific teacher.
  - **Optional Parameters**
    - `rooms[]`: Array of room IDs to limit results.
    - `from`: From date, in `YYYY-MM-DD`
    - `to`: To date, in `YYYY-MM-DD`
  - **Examples**
    - `/api/bookings?teacher=<teacher>&rooms[]=<room 1>&rooms[]=<room 2>`
    - `/api/bookings?teacher=<teacher>&from=2019-11-11`
  
- POST `/api/bookings?teacher=<ID>`
  - Create a new booking for the current teacher.
  - **Parameters**
    - `room`: The room to be booked.
    - `date`: The date for the booking, in `YYYY-MM-DD`
    - `period`: The period number for the booking.

- DELETE `/api/bookings/:id?teacher=<ID>`
  - Delete a booking by its ID.