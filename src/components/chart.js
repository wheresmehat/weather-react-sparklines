import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

function average(data) {

    return Math.round(data.reduce((prev, next) => prev + next) / data.length);
}

export default (props) => {

    return (

        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div className="belowChart">{average(props.data)} {props.units}</div>
        </div>

    );

};