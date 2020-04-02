import React, { useState } from "react"
import ValueBox from "./ValueBox"

import { container } from "../styles/salesByDay.module.scss"
import { groupByDay } from "../utils/dataGrouping";
import BooleanSwitch from "./BooleanSwitch";
import {
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

const SalesByDay = ({ state }) => {
  const [viewTable, setView] = useState(true)
  const data = groupByDay(state, "day");
  // console.log(data)
  return (
    <div>
      <BooleanSwitch
        title1="Table"
        title2="Bar Chart"
        event={() => setView(!viewTable)}
        bool={viewTable}
      />
      <div className={container}>
        {
          viewTable && data.length ?
            data.map(({ day, sales }, i) => {
              return <ValueBox halfSize title={day} value={sales || 0} trueCase />
            })
            :
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="day" />
                <Tooltip />
                <Bar dataKey="sales" fill="#efb5ea" />
              </BarChart>
            </ResponsiveContainer>
        }
      </div>
    </div>
  )
}

export default SalesByDay

