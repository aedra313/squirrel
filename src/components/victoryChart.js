import React, {} from 'react';
import s from './victoryChart.module.css';
import {VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryScatter} from 'victory';

export default function VictoryChartTest() {
  const data = [
    {x: 1, y: 4},
    {x: 2, y: 3},
    {x: 3, y: 2},
    {x: 4, y: 3},
    {x: 5, y: 2},
    {x: 6, y: 5},
    {x: 7, y: 5},
    {x: 8, y: 4},
    {x: 9, y: 2},
    {x: 10, y: 3},
    {x: 11, y: 4},
    {x: 12, y: 4},
    {x: 13, y: 5},
    {x: 14, y: 5},
    {x: 15, y: 6},
    {x: 16, y: 4},
    {x: 17, y: 3},
    {x: 18, y: 2},
    {x: 19, y: 3},
    {x: 20, y: 2},
    {x: 21, y: 5},
    {x: 22, y: 5},
    {x: 23, y: 4},
    {x: 24, y: 2},
    {x: 25, y: 3},
    {x: 26, y: 4},
    {x: 27, y: 4},
    {x: 28, y: 5},
    {x: 29, y: 5},
    {x: 30, y: 6},
  ];
  const conditions = {
    civil: ['цивільні1', 'цивільні2', 'цивільні3', 'цивільні4', 'цивільні5', 'цивільні6', 'цивільні7', 'цивільні8', 'цивільні9', 'цивільні10', 'цивільні11', 'цивільні12', 'цивільні13', 'цивільні14', 'цивільні15', 'цивільні16', 'цивільні17', 'цивільні18', 'цивільні19', 'цивільні20', 'цивільні21', 'цивільні22', 'цивільні23', 'цивільні24', 'цивільні25', 'цивільні26', 'цивільні27', 'цивільні28', 'цивільні29', 'цивільні30'],
    military: ['військові1', 'військові2', 'військові3', 'військові4', 'військові5', 'військові6', 'військові7', 'військові8', 'військові9', 'військові10', 'військові11', 'військові12', 'військові13', 'військові14', 'військові15', 'військові16', 'військові17', 'військові18', 'військові19', 'військові20', 'військові21', 'військові22', 'військові23', 'військові24', 'військові25', 'військові26', 'військові27', 'військові28', 'військові29', 'військові30'],
    faggots: ['підори1', 'підори2', 'підори3', 'підори4', 'підори5', 'підори6', 'підори7', 'підори8', 'підори9', 'підори10', 'підори11', 'підори12', 'підори13', 'підори14', 'підори15', 'підори16', 'підори17', 'підори18', 'підори19', 'підори20', 'підори21', 'підори22', 'підори23', 'підори24', 'підори25', 'підори26', 'підори27', 'підори28', 'підори29', 'підори30'],
  };
  let i=0;
  const faggotCondition = conditions.faggots.map((faggot)=> <div key={i++} className={s.base}><p className={s.conditionStyle}>{faggot}</p></div>);
  const conditionsLineData1 = [];
  const conditionsLineData2 = [];
  for (let i=0; i < conditions.civil.length; i++) {
    if (i%2===1) {
      conditionsLineData1.push(conditions.military[i]);
      conditionsLineData2.push(conditions.civil[i]);
    } else {
      conditionsLineData1.push(conditions.civil[i]);
      conditionsLineData2.push(conditions.military[i]);
    };
  }
  const conditionsLine1 =[];
  const conditionsLine2 = [];
  for (let i=0; i < conditionsLineData1.length; i++) {
    console.log(i);
    if (i%2) {
      conditionsLine1.push(<div className={s.military}><p className={s.conditionStyle}> {conditionsLineData1[i]}</p></div>);
    } else {
      conditionsLine1.push(<div className={s.civil}><p className={s.conditionStyle}>{conditionsLineData1[i]}</p></div>);
    }
  }
  for (let j = 0; j < conditionsLineData2.length; j++) {
    console.log(j);
    if (j%2) {
      conditionsLine2.push(<div className={s.civil}><p className={s.conditionStyle}> {conditionsLineData2[j]}</p></div>);
    } else {
      conditionsLine2.push(<div className={s.military}><p className={s.conditionStyle}> {conditionsLineData2[j]}</p></div>);
    }
  }

  console.log(conditionsLineData2);
  return (
    <div className={s.wrapper}>
      <div className={s.internalWrapper} itemID="iw">
        <div className={s.chartContainer}>
          <VictoryChart
            className={s.chartContainer}
            theme={VictoryTheme.material}
            width={31*45.6}
            height={360}>
            <VictoryAxis dependentAxis
              width={50}
              height={350}
              maxDomain={{x: 1}}
              tickValues={[1, 2, 3, 4, 5, 6, 7]}
              theme={VictoryTheme.material}
              offsetY={200}
              standalone={false}
            />
            <VictoryAxis crossAxis
              tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]}
              maxDomain={{x: 1}}
              orientation="top"
              standalone={false} />

            <VictoryLine
              data={data}
              // data accessor for x values
              x="x"
              // data accessor for y values
              y="y"
              style={{
                data: {stroke: '#fff'},
                parent: {border: '1px solid #ccc'}}}/>
            <VictoryScatter size={5} data = {data} style={{data: {fill: '#fff'}}}/>
          </VictoryChart>
        </div>
        <div className={s.conditions}>
          <div className={s.conditionRow}>
            {conditionsLine1}
          </div>
          <div className={s.conditionRow}>
            {conditionsLine2}
          </div>
          <div className={s.conditionRow}>
            {faggotCondition}
          </div>
        </div>

      </div>
    </div>

  );
}
