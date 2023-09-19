import { LineChart as LC, Line,Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectMarksData = [
        { id: 1, name: 'Alice', physics: 85, chemistry: 90, math: 78 },
        { id: 2, name: 'Bob', physics: 20, chemistry: 85, math: 80 },
        { id: 3, name: 'Charlie', physics: 92, chemistry: 88, math: 95 },
        { id: 4, name: 'David', physics: 88, chemistry: 84, math: 90 },
        { id: 5, name: 'Emma', physics: 70, chemistry: 75, math: 68 },
        { id: 6, name: 'Frank', physics: 95, chemistry: 50, math: 40 },
        { id: 7, name: 'Grace', physics: 33, chemistry: 78, math: 85 },
        { id: 8, name: 'Hannah', physics: 79, chemistry: 30, math: 77 },
        { id: 9, name: 'Ian', physics: 87, chemistry: 89, math: 84 },
        { id: 10, name: 'Jack', physics: 90, chemistry: 88, math: 55 }
    ];
    return (
        <div className='mt-8'>
            <LC width={1200} height={400} data={subjectMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line type='monotone' dataKey='math' stroke='red'></Line>
                <Line type='monotone' dataKey='chemistry' stroke='green'></Line>
                <Line type='monotone' dataKey='physics' stroke='purple'></Line>
            </LC>
        </div>
    );
};

export default LineChart;