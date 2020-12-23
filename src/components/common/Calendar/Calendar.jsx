import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import './Calendar.scss';

const Calendar = props => {
    const { 
        //HOC props
        t,
        //Passed Props
        customClass,
        month,
        year,
        holidays = [],
    } = props;

    const getFirstDayOfMonth = (month,year) => new Date(year + "-" + month + "-01").getDay() + 1;
    const getLastDayOfMonth = (month, year) => new Date(year, month, 0).getDate(); 
    const firstDay = getFirstDayOfMonth(month, year);
    const lastDay = getLastDayOfMonth(month,year);
    let currentDay = 1;
    const isHoliday = day => holidays.includes(day); 
    
    const daysOfWeek = [
        t('daysOfWeek.monday'),
        t('daysOfWeek.tuesday'),
        t('daysOfWeek.wednesday'),
        t('daysOfWeek.thursday'),
        t('daysOfWeek.friday'),
        t('daysOfWeek.saturday'),
        t('daysOfWeek.sunday')
    ];

    const months = {
        "01": t('months.jan'),
        "02": t('months.feb'),
        "03": t('months.mar'),
        "04": t('months.apr'),
        "05": t('months.may'),
        "06": t('months.jun'),
        "07": t('months.jul'),
        "08": t('months.aug'),
        "09": t('months.sep'),
        10: t('months.oct'),
        11: t('months.nov'),
        12: t('months.dec')
    }

    const getMonth = () => {
        const numberOfWeeks = 6;
        let weeks = [];
        let i = 1;
        while(i <= numberOfWeeks) {
            if (currentDay <= lastDay) {
                weeks.push(
                    <tr key={`week-${i}`}>
                        {getWeeks(i)}
                    </tr>
                );
            }
            i++;
        }
        return weeks;
    }

    const getWeeks = currentWeek => {
        let days = [];
        let i = 1;
        
        while(i <= daysOfWeek.length) {
            //If its the first week of the month
            if(currentWeek === 1) {
                if(i < firstDay) {
                    days.push(<td></td>);
                } else {
                    days.push(
                        dayInfo({ day: currentDay, index: i})
                    );
                    currentDay++;
                }
            } else {
                if(currentDay <= lastDay) {
                    days.push(
                        dayInfo({ day: currentDay, index: i})
                    );
                    currentDay++;
                } else {
                    days.push(<td></td>);
                } 
            }
            i++;
        }
        return days;
    }

    const dayInfo = ({day, index}) => {
        const defaultDay = (
            <td className="regularDay">
                <div className="content">
                    <div>{day}</div>
                    <div></div>
                </div>
            </td>
        );

        if (isHoliday(day)) {
            return defaultDay
        }

        switch (index) {
            case 1:
            case 2:
                return (
                    <td className="receptionDay">
                        <div className="content">
                            <div>{day}</div>
                            <div>{t('Calendar.receptionDay')}</div>
                        </div>
                    </td>
                );
            case 5:
                return (
                    <td className="deliveryDay">
                        <div className="content">
                            <div>{day}</div>
                            <div>{t('Calendar.deliveryDay')}</div>
                        </div>
                    </td>
                ); 
            default:
                return defaultDay;
        }
    }

    return (
        <div className={`calendar ${customClass}`}>
            <h3>{months[`${month}`]}</h3>
            <Table responsive>
                <thead>
                    <tr>
                    {daysOfWeek.map((day,i) => <th key={day}>{day}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {getMonth()}
                </tbody>
            </Table>
        </div>
    );
}
export default withTranslation('common')(Calendar);