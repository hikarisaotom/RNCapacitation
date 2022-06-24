import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalculator} from '../components/ButtonCalculator';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {
    btnAdd,
    calculate,
    addTextNumber,
    oldVvalue,
    value,
    clean,
    positiveNegative,
    deleteNumber,
    btnDivition,
    btnMultiplication,
    btnSubstraction,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.tinyResult}>{oldVvalue} </Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {value}{' '}
      </Text>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalculator text="C" color="#9B9B9B" action={clean} />
        <ButtonCalculator
          text="+/-"
          color="#9B9B9B"
          action={positiveNegative}
        />
        <ButtonCalculator text="Del" color="#9B9B9B" action={deleteNumber} />
        <ButtonCalculator text="/" color="#FF9427" action={btnDivition} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalculator text="7" action={addTextNumber} />
        <ButtonCalculator text="8" action={addTextNumber} />
        <ButtonCalculator text="9" action={addTextNumber} />
        <ButtonCalculator text="x" color="#FF9427" action={btnMultiplication} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalculator text="4" action={addTextNumber} />
        <ButtonCalculator text="5" action={addTextNumber} />
        <ButtonCalculator text="6" action={addTextNumber} />
        <ButtonCalculator text="-" color="#FF9427" action={btnSubstraction} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalculator text="1" action={addTextNumber} />
        <ButtonCalculator text="2" action={addTextNumber} />
        <ButtonCalculator text="3" action={addTextNumber} />
        <ButtonCalculator text="+" color="#FF9427" action={btnAdd} />
      </View>
      {/* Fila de Botones */}
      <View style={styles.row}>
        <ButtonCalculator text="0" width action={addTextNumber} />
        <ButtonCalculator text="." action={addTextNumber} />
        <ButtonCalculator text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
