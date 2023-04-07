import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { useContext } from 'react';
import { Store } from './Context';

am4core.useTheme(am4themes_animated);

const LineChart = () => {
    const { Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4 } = useContext(Store)
    useEffect(() => {
        let chart = am4core.create('chartdiv', am4charts.XYChart);

        chart.data = [
            { x: 2, y1: Button1 ? -5.01 : 0, y2: Button2 ? -5.28 : 0, y3: Button3 ? -5.12 : 0, y4: Button4 ? -5.50 : 0 },
            { x: 4, y1: Button1 ? -5.20 : 0, y2: Button2 ? -5.62 : 0, y3: Button3 ? -5.30 : 0, y4: Button4 ? -5.90 : 0 },
            { x: 6, y1: Button1 ? -5.35 : 0, y2: Button2 ? -5.97 : 0, y3: Button3 ? -5.43 : 0, y4: Button4 ? -6.10 : 0 },
            { x: 8, y1: Button1 ? -5.51 : 0, y2: Button2 ? -6.31 : 0, y3: Button3 ? -5.78 : 0, y4: Button4 ? -6.50 : 0 }
        ];

        chart.paddingRight = 20;
        chart.maskBullets = false;

        let xAxes = chart.xAxes.push(new am4charts.CategoryAxis());
        xAxes.dataFields.category = 'x';

        xAxes.renderer.line.strokeOpacity = 1;
        xAxes.renderer.line.strokeWidth = 2;
        xAxes.renderer.line.stroke = am4core.color('#000000');
        xAxes.title.text = "Follow-up (years)"
        xAxes.renderer.opposite = true;


        let yAxes = chart.yAxes.push(new am4charts.ValueAxis());
        yAxes.min = -7.5;
        yAxes.max = -4.5;
        yAxes.strictMinMax = true;
        yAxes.renderer.grid.template.strokeOpacity = 0.2;
        yAxes.renderer.line.strokeOpacity = 1;
        yAxes.renderer.line.strokeWidth = 2;
        yAxes.renderer.line.stroke = am4core.color('#000000');
        yAxes.title.text = "Estimated MD (db)"

        let series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = 'y1';
        series1.dataFields.categoryX = 'x';
        series1.strokeWidth = 2;
        series1.stroke = am4core.color(`green`);
        let bullet1 = series1.bullets.push(new am4charts.Bullet());
        let circle = bullet1.createChild(am4core.Circle);
        circle.width = 15;
        circle.height = 15;
        circle.horizontalCenter = 'middle';
        circle.verticalCenter = 'middle';
        circle.strokeWidth = 2;
        circle.stroke = am4core.color(`green`);
        circle.fill = am4core.color(`green`);

        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = 'y2';
        series2.dataFields.categoryX = 'x';
        series2.strokeWidth = 2;
        series2.stroke = am4core.color('blue');
        let bullet2 = series2.bullets.push(new am4charts.Bullet());
        let square = bullet2.createChild(am4core.Rectangle);
        square.width = 15;
        square.height = 15;
        square.horizontalCenter = 'middle';
        square.verticalCenter = 'middle';
        square.strokeWidth = 2;
        square.stroke = am4core.color('blue');
        square.fill = am4core.color('blue');

        let series3 = chart.series.push(new am4charts.LineSeries());
        series3.dataFields.valueY = 'y3';
        series3.dataFields.categoryX = 'x';
        series3.strokeWidth = 2;
        series3.stroke = am4core.color('red');
        let bullet3 = series3.bullets.push(new am4charts.Bullet());
        let triangle = bullet3.createChild(am4core.Triangle);
        triangle.width = 12;
        triangle.height = 12;
        triangle.horizontalCenter = 'middle';
        triangle.verticalCenter = 'middle';
        triangle.strokeWidth = 2;
        triangle.stroke = am4core.color('red');
        triangle.fill = am4core.color('red');
        triangle.direction = 'top';

        let series4 = chart.series.push(new am4charts.LineSeries());
        series4.dataFields.valueY = 'y4';
        series4.dataFields.categoryX = 'x';
        series4.strokeWidth = 2;
        series4.stroke = am4core.color('orange');
        let bullet4 = series4.bullets.push(new am4charts.Bullet());
        let diamond = bullet4.createChild(am4core.Rectangle);
        diamond.width = 12;
        diamond.height = 12;
        diamond.horizontalCenter = 'middle';
        diamond.verticalCenter = 'middle';
        diamond.strokeWidth = 2;
        diamond.stroke = am4core.color('orange');
        diamond.fill = am4core.color('orange');
        diamond.direction = 'top';
        diamond.rotation = 45


        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = 'zoomX';

        return () => {
            chart.dispose();
        };
    }, [Button1, setButton1, Button2, setButton2, Button3, setButton3, Button4, setButton4]);

    return <div id="chartdiv" style={{ width: '1250px', height: '600px' }} />;
};

export default LineChart;


const data = []