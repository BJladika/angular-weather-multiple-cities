export interface City_Weather {
    id: number;
    name: string;
    main: {
      temp: number;
      feels_like: number;
    }
    weather:[
      {
        icon: string;
        description: string;
      }
    ]
  }