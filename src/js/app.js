const net = new brain.NeuralNetwork();

    net.train([

      {
        input: {
          "sex": "1",
          "age": "35",
          "Time": "12",
          "Number_of_Warts": "5",
          "Type": "1",
          "Area": "100",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "29",
          "Time": "7",
          "Number_of_Warts": "5",
          "Type": "1",
          "Area": "96",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "50",
          "Time": "8",
          "Number_of_Warts": "1",
          "Type": "3",
          "Area": "132",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "32",
          "Time": "11.75",
          "Number_of_Warts": "7",
          "Type": "3",
          "Area": "750",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "67",
          "Time": "9.25",
          "Number_of_Warts": "1",
          "Type": "1",
          "Area": "42",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "41",
          "Time": "8",
          "Number_of_Warts": "2",
          "Type": "2",
          "Area": "20",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "36",
          "Time": "11",
          "Number_of_Warts": "2",
          "Type": "1",
          "Area": "8",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "59",
          "Time": "3.5",
          "Number_of_Warts": "3",
          "Type": "3",
          "Area": "20",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "20",
          "Time": "4.5",
          "Number_of_Warts": "12",
          "Type": "1",
          "Area": "6",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "34",
          "Time": "11.25",
          "Number_of_Warts": "3",
          "Type": "3",
          "Area": "150",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "21",
          "Time": "10.75",
          "Number_of_Warts": "5",
          "Type": "1",
          "Area": "35",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "15",
          "Time": "6",
          "Number_of_Warts": "2",
          "Type": "1",
          "Area": "30",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "15",
          "Time": "2",
          "Number_of_Warts": "3",
          "Type": "1",
          "Area": "4",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "15",
          "Time": "3.75",
          "Number_of_Warts": "2",
          "Type": "3",
          "Area": "70",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "17",
          "Time": "11",
          "Number_of_Warts": "2",
          "Type": "1",
          "Area": "10",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "17",
          "Time": "5.25",
          "Number_of_Warts": "3",
          "Type": "1",
          "Area": "63",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "23",
          "Time": "11.75",
          "Number_of_Warts": "12",
          "Type": "3",
          "Area": "72",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "27",
          "Time": "8.75",
          "Number_of_Warts": "2",
          "Type": "1",
          "Area": "6",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "15",
          "Time": "4.25",
          "Number_of_Warts": "1",
          "Type": "1",
          "Area": "6",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "18",
          "Time": "5.75",
          "Number_of_Warts": "1",
          "Type": "1",
          "Area": "80",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "22",
          "Time": "5.5",
          "Number_of_Warts": "2",
          "Type": "1",
          "Area": "70",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "16",
          "Time": "8.5",
          "Number_of_Warts": "1",
          "Type": "2",
          "Area": "60",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "28",
          "Time": "4.75",
          "Number_of_Warts": "3",
          "Type": "1",
          "Area": "100",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "40",
          "Time": "9.75",
          "Number_of_Warts": "1",
          "Type": "2",
          "Area": "80",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "30",
          "Time": "2.5",
          "Number_of_Warts": "2",
          "Type": "1",
          "Area": "115",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "34",
          "Time": "12",
          "Number_of_Warts": "3",
          "Type": "3",
          "Area": "95",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "20",
          "Time": "0.5",
          "Number_of_Warts": "2",
          "Type": "1",
          "Area": "75",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "35",
          "Time": "12",
          "Number_of_Warts": "5",
          "Type": "3",
          "Area": "100",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "24",
          "Time": "9.5",
          "Number_of_Warts": "3",
          "Type": "3",
          "Area": "20",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "19",
          "Time": "8.75",
          "Number_of_Warts": "6",
          "Type": "1",
          "Area": "160",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "35",
          "Time": "9.25",
          "Number_of_Warts": "9",
          "Type": "1",
          "Area": "100",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "29",
          "Time": "7.25",
          "Number_of_Warts": "6",
          "Type": "1",
          "Area": "96",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "50",
          "Time": "8.75",
          "Number_of_Warts": "11",
          "Type": "3",
          "Area": "132",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "32",
          "Time": "12",
          "Number_of_Warts": "4",
          "Type": "3",
          "Area": "750",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "67",
          "Time": "12",
          "Number_of_Warts": "12",
          "Type": "3",
          "Area": "42",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "41",
          "Time": "10.5",
          "Number_of_Warts": "2",
          "Type": "2",
          "Area": "20",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "36",
          "Time": "11",
          "Number_of_Warts": "6",
          "Type": "1",
          "Area": "8",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "63",
          "Time": "2.75",
          "Number_of_Warts": "3",
          "Type": "3",
          "Area": "20",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "20",
          "Time": "5",
          "Number_of_Warts": "3",
          "Type": "1",
          "Area": "6",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "34",
          "Time": "12",
          "Number_of_Warts": "1",
          "Type": "3",
          "Area": "150",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "21",
          "Time": "10.5",
          "Number_of_Warts": "5",
          "Type": "1",
          "Area": "35",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "15",
          "Time": "8",
          "Number_of_Warts": "12",
          "Type": "1",
          "Area": "30",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "15",
          "Time": "3.5",
          "Number_of_Warts": "2",
          "Type": "1",
          "Area": "4",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "15",
          "Time": "1.5",
          "Number_of_Warts": "12",
          "Type": "3",
          "Area": "70",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "17",
          "Time": "11.5",
          "Number_of_Warts": "2",
          "Type": "1",
          "Area": "10",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "17",
          "Time": "5.25",
          "Number_of_Warts": "4",
          "Type": "1",
          "Area": "63",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "23",
          "Time": "9.5",
          "Number_of_Warts": "5",
          "Type": "3",
          "Area": "72",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "27",
          "Time": "10",
          "Number_of_Warts": "5",
          "Type": "1",
          "Area": "6",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "15",
          "Time": "4",
          "Number_of_Warts": "7",
          "Type": "1",
          "Area": "6",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "18",
          "Time": "4.5",
          "Number_of_Warts": "8",
          "Type": "1",
          "Area": "80",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "22",
          "Time": "5",
          "Number_of_Warts": "9",
          "Type": "1",
          "Area": "70",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "16",
          "Time": "10.25",
          "Number_of_Warts": "3",
          "Type": "2",
          "Area": "60",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "28",
          "Time": "4",
          "Number_of_Warts": "11",
          "Type": "1",
          "Area": "100",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "40",
          "Time": "8.75",
          "Number_of_Warts": "6",
          "Type": "2",
          "Area": "80",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "30",
          "Time": "0.5",
          "Number_of_Warts": "8",
          "Type": "3",
          "Area": "115",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "34",
          "Time": "10.75",
          "Number_of_Warts": "1",
          "Type": "3",
          "Area": "95",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "20",
          "Time": "3.75",
          "Number_of_Warts": "11",
          "Type": "1",
          "Area": "75",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "35",
          "Time": "8.5",
          "Number_of_Warts": "6",
          "Type": "3",
          "Area": "100",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "24",
          "Time": "9.5",
          "Number_of_Warts": "8",
          "Type": "1",
          "Area": "20",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "19",
          "Time": "8",
          "Number_of_Warts": "9",
          "Type": "1",
          "Area": "160",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "35",
          "Time": "7.25",
          "Number_of_Warts": "2",
          "Type": "1",
          "Area": "100",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "29",
          "Time": "11.75",
          "Number_of_Warts": "5",
          "Type": "1",
          "Area": "96",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "50",
          "Time": "9.5",
          "Number_of_Warts": "4",
          "Type": "3",
          "Area": "132",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "32",
          "Time": "12",
          "Number_of_Warts": "12",
          "Type": "3",
          "Area": "750",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "67",
          "Time": "10",
          "Number_of_Warts": "7",
          "Type": "1",
          "Area": "42",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "41",
          "Time": "7.75",
          "Number_of_Warts": "5",
          "Type": "2",
          "Area": "20",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "36",
          "Time": "10.5",
          "Number_of_Warts": "4",
          "Type": "1",
          "Area": "8",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "67",
          "Time": "3.75",
          "Number_of_Warts": "11",
          "Type": "3",
          "Area": "20",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "20",
          "Time": "4",
          "Number_of_Warts": "3",
          "Type": "1",
          "Area": "6",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "34",
          "Time": "11.25",
          "Number_of_Warts": "1",
          "Type": "3",
          "Area": "150",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "21",
          "Time": "10.75",
          "Number_of_Warts": "7",
          "Type": "1",
          "Area": "35",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "15",
          "Time": "10.5",
          "Number_of_Warts": "11",
          "Type": "1",
          "Area": "30",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "15",
          "Time": "2",
          "Number_of_Warts": "11",
          "Type": "1",
          "Area": "4",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "15",
          "Time": "2",
          "Number_of_Warts": "10",
          "Type": "3",
          "Area": "70",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "17",
          "Time": "9.25",
          "Number_of_Warts": "12",
          "Type": "1",
          "Area": "10",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "17",
          "Time": "5.75",
          "Number_of_Warts": "10",
          "Type": "1",
          "Area": "63",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "23",
          "Time": "10.25",
          "Number_of_Warts": "7",
          "Type": "3",
          "Area": "72",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "27",
          "Time": "10.5",
          "Number_of_Warts": "7",
          "Type": "1",
          "Area": "6",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "15",
          "Time": "5.5",
          "Number_of_Warts": "5",
          "Type": "1",
          "Area": "6",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "18",
          "Time": "4",
          "Number_of_Warts": "1",
          "Type": "1",
          "Area": "80",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "22",
          "Time": "4.5",
          "Number_of_Warts": "2",
          "Type": "1",
          "Area": "70",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "16",
          "Time": "11",
          "Number_of_Warts": "3",
          "Type": "2",
          "Area": "60",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "28",
          "Time": "5",
          "Number_of_Warts": "9",
          "Type": "1",
          "Area": "100",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "40",
          "Time": "11.5",
          "Number_of_Warts": "9",
          "Type": "2",
          "Area": "80",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "30",
          "Time": "0.25",
          "Number_of_Warts": "10",
          "Type": "1",
          "Area": "115",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "34",
          "Time": "12",
          "Number_of_Warts": "3",
          "Type": "3",
          "Area": "95",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "2",
          "age": "20",
          "Time": "3.5",
          "Number_of_Warts": "6",
          "Type": "1",
          "Area": "75",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "2",
          "age": "35",
          "Time": "8.25",
          "Number_of_Warts": "8",
          "Type": "3",
          "Area": "100",
        }, output: { "Result_of_Treatment": "0" }
      },
      {
        input: {
          "sex": "1",
          "age": "24",
          "Time": "10.75",
          "Number_of_Warts": "10",
          "Type": "1",
          "Area": "20",
        }, output: { "Result_of_Treatment": "1" }
      },
      {
        input: {
          "sex": "1",
          "age": "19",
          "Time": "8",
          "Number_of_Warts": "8",
          "Type": "1",
          "Area": "160",
        }, output: { "Result_of_Treatment": "1" }
      }

    ]);

    // const output = net.run({sex:0,age:29,Time:8,Number_of_Warts:8,Type:3,Area:160 }); // { white: 0.99, black: 0.002 }
