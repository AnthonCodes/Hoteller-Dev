const Calendar = tui.Calendar;

const container = document.getElementById("calendar");
const options = {
  defaultView: "month",
  timezone: {
    zones: [
      {
        timezoneName: "PST",
      },
    ],
  },
  useFormPopup: true,
  useDetailPopup: true,
  calendars: [
    {
      id: "cal1",
      name: "Personal",
      backgroundColor: "#03bd9e",
    },
  ],
};

const calendar = new Calendar(container, options);
