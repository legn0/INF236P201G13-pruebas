import { useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import { es } from "date-fns/locale";
import ColumnaDia from "./ColumnaDia";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [, setSelectedCalendar] = useState(1);
  const [, setCurrentWeek] = useState(getWeek(currentMonth));

  const changeWeekHandle = (btnType) => {
    if (btnType === "Semana anterior") {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "Semana siguiente") {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const renderHeader = () => {
    return (
      <div className="header row flex-middle">
        <div className="col col-start"></div>
        <div className="col col-center">
          <span>Horario</span>
        </div>
        <div className="col col-end"></div>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "EEEEEEE, dd MMMMMMMMM Y";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat, { locale: es })}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };

  const renderCells = () => {
    let rows = [];
    let days = [];

    for (let i = 0; i < 7; i++) {
      days.push(
        <>
          <ColumnaDia
            className="columna-dia"
            tipoExamen="radiografia"
            dia="Martes"
            fecha="2023-11-30"
          />
        </>
      );
    }

    for (let i = 0; i < 1; i++) {
      rows.push(
        <div className="row" key={i}>
          {days}
        </div>
      );
    }

    return <div className="body">{rows}</div>;
  };

  const renderFooter = () => {
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div
            className="icon"
            onClick={() => changeWeekHandle("Semana anterior")}
          >
            Semana anterior
          </div>
        </div>
        <div className="col col-center">
          <button onClick={() => setSelectedCalendar(1)}>Exámenes 1</button>
          <button onClick={() => setSelectedCalendar(2)}>Exámenes 2</button>
          <button onClick={() => setSelectedCalendar(3)}>Exámenes 3</button>
        </div>
        <div
          className="col col-end"
          onClick={() => changeWeekHandle("Semana siguiente")}
        >
          <div className="icon">Semana siguiente</div>
        </div>
      </div>
    );
  };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      {renderFooter()}
    </div>
  );
};

export default Calendar;
