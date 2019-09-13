    class Temp extends React.Component {
        state = {
          num: 0,
        };
        add = () => {
          this.setState(({num}) => {
            return {
              num: num + 1,
            };
          });
        };
      
        render() {
          const {num} = this.state;
          return (
            <div>
              <button onClick={this.add}>+</button>
              <p>{num}</p>
            </div>
          );
        }
      }
      
      
      
      ReactDOM.render(
          <Temp  />,
          document.getElementById('container')
        );


