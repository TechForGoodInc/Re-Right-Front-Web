import React, {useState} from 'react'
import {
  View,
   Text,
   StyleSheet,
   Pressable,
 } from "react-native";
 import colors from '../../../config/colors';
 export default function RecapQuiz({navigation}) {
  //sample questions
  const questions = [
      {
          questionText: 'What can be defined as human rights?',
          answerOptions: [
              { answerText: 'Those benefits granted to any adult person.', isCorrect: false },
              { answerText: 'Those entitlements for those lawfully residing in a given country.', isCorrect: false },
              { answerText: 'Those rights inherent to all human beings.', isCorrect: true },
          ],
      },
      {
          questionText: 'What makes the Universal Declaration of Human Rights so unique?',
          answerOptions: [
              { answerText: 'It was drafted by people from all over the world.', isCorrect: false },
              { answerText: ' Sets common standards on human rights protection.', isCorrect: false },
              { answerText: ' Both previous answers.', isCorrect: true },
          ],
      },
      {
          questionText: 'Is Human Rights Education relevant?',
          answerOptions: [
              { answerText: 'It is relevant for all human beings.', isCorrect: true },
              { answerText: 'It is only relevant for those working in the legal profession. ', isCorrect: false },
              { answerText: 'It is only relevant for those presenting complaints on human rights violations.', isCorrect: false },
          ],
      },
      {
          questionText: 'Are human rights related to the Sustainable Development Goals?',
          answerOptions: [
              { answerText: 'Yes, the SDGs are directly linked with human rights standards.', isCorrect: true },
              { answerText: 'Yes, but the relation is negligible.', isCorrect: false },
              { answerText: 'No, there is no connection.', isCorrect: false },
          ],
      },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  //if user clicks on correct option, score will increase by 1
  const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
          setScore(score + 1);
      }
      else {
      }
      const nextQuestion = currentQuestion + 1;
  // if no more questions left, show score
      if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
      } else {
          setShowScore(true);
      }
  };
 //  if showScore = true, scores shown. showScore = false, quiz shown.
  return (
      <View style = {styles.background}>
          {showScore ? (
              <View style = {styles.scoreText}>
              <Text style = {styles.score}>
          You scored {score} out of {questions.length}!
              </Text>
          </View>
        
          ) : (
              <>
          
               <Text style = {styles.questionNumber}>
                              Question {currentQuestion + 1} /{questions.length}
               </Text>
                        
               <Text style = {styles.question}>
                              {questions[currentQuestion].questionText}
               </Text>
               {questions[currentQuestion].answerOptions.map((answerOption) => (
                   <Pressable style={({pressed}) => [{
                       borderColor: pressed ? colors.dblue : colors.black},
                       styles.answerOption]}
                       onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                       <Text style = {styles.optionText}>{answerOption.answerText}</Text>
                   </Pressable>          
                                      ))}
                
              </>
          )}
      </View>
  );
}
const styles = StyleSheet.create({
   background: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: colors.white,
  },
   questionNumber: {
      fontSize: 30,
      alignSelf: 'center',
      fontWeight: 'bold',
      color: colors.dblue,
  },
  question: {
    fontSize: 15,
    margin: 10,
    alignSelf: 'center',
  },
  answerOption:{
     margin: 10,
     padding: 10,
     width: '90%',
     alignSelf: 'center',
     borderRadius: 10,
     backgroundColor: colors.lightblue,
     justifyContent: "center",
  },
  optionText: {
      fontSize: 18,
      alignSelf: 'center',
  },
   score: {
      fontSize: 30,
      alignSelf: 'center',
    
  },
 })
 
 
 
 
 
 
 
 
 
 
 
 

