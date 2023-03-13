export const convertTimestamp = (timestamp) => {
  const oneDay = 86400;
  const oneWeek = 604800;
  //Time now
  const now = Date.now() / 1000;

  // Todays frame [00 - 24]
  let d = new Date();
  const todaySecondsPast =
    d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  const todaySecondsGo = oneDay - todaySecondsPast;

  const diff = timestamp - now;

  //Future case
  if (diff >= 0 && diff <= todaySecondsGo) {
    return "today";
  } else if (diff > todaySecondsGo && diff <= todaySecondsGo + oneDay) {
    return "tomorrow";
  } else if (diff > todaySecondsGo + oneDay && diff <= oneWeek) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(timestamp * 1000);
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  } else if (diff > oneWeek) {
    const date = new Date(timestamp * 1000);
    let day = date.getDate();
    if (day < 10) day = "0" + day;
    const month = date.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  }
  //Past case
  if (diff < 0 && Math.abs(diff) < todaySecondsPast) {
    return "today";
  } else if (diff < 0 && Math.abs(diff) <= todaySecondsPast + oneDay) {
    return "yesterday";
  } else if (diff < 0 && Math.abs(diff) >= todaySecondsPast + oneDay) {
    const date = new Date(timestamp * 1000);
    let day = date.getDate();
    if (day < 10) day = "0" + day;
    const month = date.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  }
};
