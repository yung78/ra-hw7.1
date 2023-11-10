import React, {Component, useState} from 'react';
import moment from 'moment';

function intoDateTimePretty(Component) {
  return class extends React.Component {
    difference(val) {
      return moment().diff(this.props.date, val)
    }
    
    render() {
      const date = this.difference('days') > 0 
        ? this.difference('days') + ' days ago'
        : this.difference('hours') > 0
        ? this.difference('hours') + ' hours ago'
        : this.difference('minutes') + ' minutes ago';

      return (
        <Component 
          {...this.props}
          prettyDate={date}
      />);
    }
  };
}

function DateTime(props) {
    return (
        <p className="date">{props.prettyDate}</p>
    );
}

const DateTimePretty = intoDateTimePretty(DateTime);

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    );
}

function VideoList(props) {
    return props.list.map((item, index) => {
      return (
        <Video
          key={index}
          url={item.url}
          date={item.date}
        />
      );
  });
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/Qo5ZiXXblv4?rel=0&amp;controls=0&amp;showinfo=0', 
            date: '2023-11-10 14:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}
