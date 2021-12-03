export interface City_Forecast {
    id: number;
    list: [
      {
        dt: number;
        dt_txt: string;
        main: {
          temp: number;
        };
        weather: [{
          description: string;
          icon: string;
        }]
      }
  
    ],
  
    city: {
      id: number;
      name: string;
    }
  }