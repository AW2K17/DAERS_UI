import React,{useState} from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Button, View,ScrollView,TextInput,StyleSheet } from 'react-native';
import { Text } from 'react-native-svg';
import {  IndexPath,Datepicker, Layout,  Select, SelectItem } from '@ui-kitten/components';
import Constants from 'expo-constants';



// 3 values leni hain : protein, carbohydrates , fats, jo nutrition se arahi hain values ,woh pass krni hain
// handlegram me jo values 100 se divide horahi woh peeche se receive horahi hongi


//Values send hongi: pro, fat, carbs,calories

const Chart=({})=>{

    const protein=22;
    const fats=13;
    const carbohydrates=1.2;

    const renderOption = (title) => (
     
        
        <SelectItem title={title} />
        
        
      );


      var data2 = [
        'Protein',
        'Fats',
        'Carbs',
      ];

      var check=[]

      const meal=[
          'Breakfast','Lunch','Dinner'
      ];

      
      const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
      const [selectedIndex2, setSelectedIndex2] = React.useState(new IndexPath(0));
      
    
    //const [pro,setPro]=useState(22);
    //const [fat,setFat]=useState(34);
    //const [carbs,setCarbs]=useState(21);
    const [calories,setCalories]=useState(12);
    const [quantity,setQuantity]=useState(0);
    const [data,setData]=useState(

        [
            {
                key: 1,
                amount: protein,
                svg: { fill: 'red' },
            },
            {
                key: 2,
                amount: fats,
                svg: { fill: 'green' }
            },
            {
                key: 3,
                amount: carbohydrates,
                svg: { fill: 'blue' }
            }
        ]





    );
    



    let fat;
    let pro;
    let carbs;







   
        //displayValue--> fats/protein/carbs
        const displayValue = data2[selectedIndex.row]; 
        
        //displayValue2--> breakfast/lunch/dinner
        const displayValue2 = meal[selectedIndex2.row];  
        
        var j=0;
        for(var i=0;i<3;i++)
        { 
            if(displayValue!=data2[i]){

                check[j]=data2[i];
                j=j+1;
            }
        }
       
        /*
        const data = [
            {
                key: 1,
                amount: pro,
                svg: { fill: 'red' },
            },
            {
                key: 2,
                amount: fats,
                svg: { fill: 'green' }
            },
            {
                key: 3,
                amount: carbs,
                svg: { fill: 'blue' }
            }
        ]
        */









       // console.log(check[0],check[1]);
       
       // console.log('Pro:'+ran);












      
        const handleGram=(val,cat)=>{
            if(cat==="f")
            {
                pro=(parseFloat(((protein/100)*val).toFixed(2)))
               carbs=(parseFloat(((carbohydrates/100)*val).toFixed(2)))
            }
            if(cat==="c")
            {
                fat=(parseFloat(((fats/100)*val).toFixed(2)))
                pro=(parseFloat(((protein/100)*val).toFixed(2)))
            }
            if(cat==="p")
            {
                carbs=(parseFloat(((carbohydrates/100)*val).toFixed(2)))
                fat=(parseFloat(((fats/100)*val).toFixed(2)))
            }
            
        }
        
        
        
        
        const generateData=()=>{
            
            return (
                [
                    {
                        key: 1,
                        amount: pro,
                        svg: { fill: 'red' },
                    },
                    {
                        key: 2,
                        amount: fat,
                        svg: { fill: 'green' }
                    },
                    {
                        key: 3,
                        amount: carbs,
                        svg: { fill: 'blue' }
                    }
                ]
        
            
            )
        }
        const change=()=>{
            setCalories((4*(carbs+pro))+(9*(fat)))
        
            setData(generateData());
            
        }



        if(displayValue=='Fats')
        {
           // handleFats(quantity);
            fat=parseFloat(quantity);
            handleGram((parseFloat(quantity)/fats)*100,"f")
        }
        else if (displayValue=='Protein')
        {
            //handleProtein(quantity);
            pro=parseFloat(quantity);
            handleGram((parseFloat(quantity)/protein)*100,"p")
        }
        else if(displayValue=='Carbs')
        {
            //handleCarbohydrate(quantity);
            carbs=parseFloat(quantity);
            handleGram((parseFloat(quantity)/carbohydrates)*100,"c")
        }


        console.log(fat,carbs,pro,calories);








        



    


        
        
        
        
        function Labels({ slices, height, width }) {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
                <Text
                    key={index}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill={'white'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={24}
                    stroke={'black'}
                    strokeWidth={0.2}
                >

                    {data.amount}
                </Text>
            );
        });
    }

        return (
            <View>
                 
            <PieChart
                style={{ height: 200,marginTop:15,marginRight:75 }}
                valueAccessor={({ item }) => item.amount}
                data={data}
                spacing={0}
                outerRadius={'95%'}
            >
                <Labels/>
            </PieChart>
            
           <View style={{flexDirection: 'row'}}>
               
               <Text style={{fontSize:18,fontWeight:'bold'}}>{displayValue}: {data[0].amount}</Text>
               <Text style={{fontSize:18,fontWeight:'bold',marginLeft:8}}>{check[0]}:{data[1].amount}</Text>
               <Text style={{fontSize:18,fontWeight:'bold',marginLeft:8}}>{check[1]}: {data[2].amount}</Text>
               <Button title="Update" onPress={change} />               
               
           </View>
            <View style={{flexDirection: 'row',marginTop:33}}>
                <Select
                    style={styles.select}
                    placeholder='Default'
                    value={displayValue}
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}>
                    {data2.map(renderOption)}
                </Select>

                <TextInput style={{backgroundColor:'silver',width:120,marginLeft:6}} placeholder={'Enter Quantity'} onChangeText={setQuantity}></TextInput>
                
                </View>
                <View style={{marginTop:7}}>
                <Select
                    style={styles.select}
                    placeholder='Default'
                    value={displayValue2}
                    selectedIndex={selectedIndex2}
                    onSelect={index => setSelectedIndex2(index)}>
                    {meal.map(renderOption)}
                </Select>
                </View>

            
            
           
            </View>
 
        )
    }



export default Chart;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Constants.statusBarHeight
    },
    item: {
      width: 330,
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
        
    },
  });