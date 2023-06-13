import Charts from "react-apexcharts";
export const SkillsScreen = () => {
  return (
    <section className="skills animations">
      <h1 className="skills__h1">Skills</h1>
      <div className="skills-container">
        <div className="skills-charts">
          <h2>Html</h2>
          <Charts
            type="donut"
            width={180}
            height={220}
            series={[95, 5]}
            options={{
              labels: ["", [""]],
              tittle: {
                text: "HTML",
                color: "white",
              },
              plotOptions: {
                pie: {
                  // startAngle: -90,
                  // endAngle: 270,
                  donut: {
                    labels: {
                      show: false,
                      total: {
                        show: false,
                        fontSize: 0,
                        color: "white",
                      },
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                colors: ['#00d4ff', '#ff4f6f', '#00d4ff'],
     
                gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                border: 'none',
                opacityTo: 1,
                stops: [0, 70, 104],
                } 
              },

              legend: {
                position: "bottom",
                fontFamily: "Rubik, sans-serif",
                disabled: false,
              },
              // enabled: false
            }}
          />
        </div>
        <div className="skills-charts">
          <h2>Css</h2>
          <Charts
            type="donut"
            width={180}
            height={220}
            series={[90, 10]}
            options={{
              labels: ["", [""]],
              tittle: {
                text: "CSS",
                color: "white",
              },
              plotOptions: {
                pie: {
                  // startAngle: -90,
                  // endAngle: 270,
                  donut: {
                    labels: {
                      show: false,
                      total: {
                        show: false,
                        fontSize: 0,
                        color: "white",
                      },
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                colors: ['#00d4ff', '#ff4f6f', '#00d4ff'],
     
                gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                border: 'none',
                opacityTo: 1,
                stops: [0, 70, 104],
                } 
              },
              legend: {
                position: "bottom",
              },
              // enabled: false
            }}
          />
        </div>
        <div className="skills-charts">
          <h2>Javascript</h2>
          <Charts
            type="donut"
            width={180}
            height={220}
            series={[60, 40]}
            options={{
              labels: ["", [""]],
              tittle: {
                text: "JAVASCRIPT",
                color: "white",
              },
              plotOptions: {
                pie: {
                  // startAngle: -90,
                  // endAngle: 270,
                  donut: {
                    labels: {
                      show: false,
                      total: {
                        show: false,
                        fontSize: 0,
                        color: "white",
                      },
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                colors: ['#00d4ff', '#ff4f6f', '#00d4ff'],
     
                gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                border: 'none',
                opacityTo: 1,
                stops: [0, 70, 104],
                } 
              },
              legend: {
                position: "bottom",
              },
              // enabled: false
            }}
          />
        </div>
        <div className="skills-charts">
          <h2>React</h2>
          <Charts
            type="donut"
            width={180}
            height={220}
            series={[70, 30]}
            options={{
              labels: ["", [""]],
              tittle: {
                text: "REACT",
                color: "white",
              },
              plotOptions: {
                pie: {
                  // startAngle: -90,
                  // endAngle: 270,
                  donut: {
                    labels: {
                      show: false,
                      total: {
                        show: false,
                        fontSize: 11,
                        color: "white",
                      },
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                colors: ['#00d4ff', '#ff4f6f', '#00d4ff'],
     
                gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                border: 'none',
                opacityTo: 1,
                stops: [0, 70, 104],
                } 
              },
              legend: {
                position: "bottom",
              },
              // enabled: false
            }}
          />
        </div>
        <div className="skills-charts">
          <h2>Vue</h2>
          <Charts
            type="donut"
            width={180}
            height={220}
            series={[60, 40]}
            options={{
              labels: ["", [""]],
              tittle: {
                text: "Solidity",
                color: "white",
              },
              plotOptions: {
                pie: {
                  // startAngle: -90,
                  // endAngle: 270,
                  donut: {
                    labels: {
                      show: false,
                      total: {
                        show: false,
                        fontSize: 11,
                        color: "white",
                      },
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                colors: ['#00d4ff', '#ff4f6f', '#00d4ff'],
     
                gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                border: 'none',
                opacityTo: 1,
                stops: [0, 70, 104],
                } 
              },
              legend: {
                position: "bottom",
              },
              // enabled: false
            }}
          />
        </div>
        <div className="skills-charts">
          <h2>Solidity</h2>
          <Charts
            type="donut"
            width={180}
            height={220}
            series={[40, 60]}
            options={{
              labels: ["", [""]],
              tittle: {
                text: "Solidity",
                color: "white",
              },
              plotOptions: {
                pie: {
                  // startAngle: -90,
                  // endAngle: 270,
                  donut: {
                    labels: {
                      show: false,
                      total: {
                        show: false,
                        fontSize: 11,
                        color: "white",
                      },
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                colors: ['#00d4ff', '#ff4f6f', '#00d4ff'],
     
                gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                border: 'none',
                opacityTo: 1,
                stops: [0, 70, 104],
                } 
              },
              legend: {
                position: "bottom",
              },
              // enabled: false
            }}
          />
        </div>
        <div className="skills-charts">
          <h2>Express</h2>
          <Charts
            type="donut"
            width={180}
            height={220}
            series={[65, 35]}
            options={{
              labels: ["", [""]],
              tittle: {
                text: "Express",
                color: "white",
              },
              plotOptions: {
                pie: {
                  // startAngle: -90,
                  // endAngle: 270,
                  donut: {
                    labels: {
                      show: false,
                      total: {
                        show: false,
                        fontSize: 11,
                        color: "white",
                      },
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                colors: ['#00d4ff', '#ff4f6f', '#00d4ff'],
     
                gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                border: 'none',
                opacityTo: 1,
                stops: [0, 70, 104],
                } 
              },
              legend: {
                position: "bottom",
              },
              // enabled: false
            }}
          />
        </div>
        <div className="skills-charts">
          <h2>Nest</h2>
          <Charts
            type="donut"
            width={180}
            height={220}
            series={[55, 45]}
            options={{
              labels: ["", [""]],
              tittle: {
                text: "Express",
                color: "white",
              },
              plotOptions: {
                pie: {
                  // startAngle: -90,
                  // endAngle: 270,
                  donut: {
                    labels: {
                      show: false,
                      total: {
                        show: false,
                        fontSize: 11,
                        color: "white",
                      },
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                colors: ['#00d4ff', '#ff4f6f', '#00d4ff'],
     
                gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                border: 'none',
                opacityTo: 1,
                stops: [0, 70, 104],
                } 
              },
              legend: {
                position: "bottom",
              },
              // enabled: false
            }}
          />
        </div>
        <div className="skills-charts">
          <h2>Corel Draw</h2>
          <Charts
            type="donut"
            width={180}
            height={220}
            series={[85, 15]}
            options={{
              labels: ["", [""]],
              tittle: {
                text: "Express",
                color: "white",
              },
              plotOptions: {
                pie: {
                  // startAngle: -90,
                  // endAngle: 270,
                  donut: {
                    labels: {
                      show: false,
                      total: {
                        show: false,
                        fontSize: 11,
                        color: "white",
                      },
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                colors: ['#00d4ff', '#ff4f6f', '#00d4ff'],
     
                gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                border: 'none',
                opacityTo: 1,
                stops: [0, 70, 104],
                } 
              },
              legend: {
                position: "bottom",
              },
              // enabled: false
            }}
          />
        </div>
        <div className="skills-charts">
          <h2>Adobe Photoshop</h2>
          <Charts
            type="donut"
            width={180}
            height={220}
            series={[75, 25]}
            options={{
              labels: ["", [""]],
              tittle: {
                text: "Express",
                color: "white",
              },
              plotOptions: {
                pie: {
                  // startAngle: -90,
                  // endAngle: 270,
                  donut: {
                    labels: {
                      show: false,
                      total: {
                        show: false,
                        fontSize: 11,
                        color: "white",
                      },
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                colors: ['#00d4ff', '#ff4f6f', '#00d4ff'],
     
                gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                border: 'none',
                opacityTo: 1,
                stops: [0, 70, 104],
                } 
              },
              legend: {
                position: "bottom",
              },
              // enabled: false
            }}
          />
        </div>
        <div className="skills-charts">
          <h2>Node</h2>
          <Charts
            type="donut"
            width={180}
            height={220}
            series={[60, 40]}
            options={{
              labels: ["", [""]],
              tittle: {
                text: "Node",
                color: "white",
              },
              plotOptions: {
                pie: {
                  // startAngle: -90,
                  // endAngle: 270,
                  donut: {
                    labels: {
                      show: false,
                      total: {
                        show: false,
                        fontSize: 11,
                        color: "white",
                      },
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                colors: ['#00d4ff', '#ff4f6f', '#00d4ff'],
     
                gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                border: 'none',
                opacityTo: 1,
                stops: [0, 70, 104],
                } 
              },
              legend: {
                position: "bottom",
              },
              // enabled: false
            }}
          />
        </div>
        <div className="skills-charts">
          <h2>Database</h2>
          <Charts
            type="donut"
            width={180}
            height={220}
            series={[50, 50]}
            options={{
              labels: ["", [""]],
              tittle: {
                text: "Database",
                color: "white",
              },
              plotOptions: {
                pie: {
                  // startAngle: -90,
                  // endAngle: 270,
                  donut: {
                    labels: {
                      show: false,
                      total: {
                        show: false,
                        fontSize: 11,
                        color: "white",
                      },
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                colors: ['#00d4ff', '#ff4f6f', '#00d4ff'],
     
                gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                border: 'none',
                opacityTo: 1,
                stops: [0, 70, 104],
                } 
              },
              legend: {
                position: "bottom",
              },
              // enabled: false
            }}
          />
        </div>
        <div className="skills-charts">
          <h2>English B1</h2>
          <Charts
            type="donut"
            width={180}
            height={220}
            series={[50, 50]}
            options={{
              labels: ["", [""]],
              tittle: {
                text: "english",
                color: "white",
              },
              plotOptions: {
                pie: {
                  // startAngle: -90,
                  // endAngle: 270,
                  donut: {
                    labels: {
                      show: false,
                      total: {
                        show: false,
                        fontSize: 11,
                        color: "white",
                      },
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                colors: ['#00d4ff', '#ff4f6f', '#00d4ff'],
     
                gradient: {
                shade: 'dark',
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                border: 'none',
                opacityTo: 1,
                stops: [0, 70, 104],
                } 
              },
              legend: {
                position: "bottom",
              },
              // enabled: false
            }}
          />
        </div>
    </div>
    </section>
  );
};
