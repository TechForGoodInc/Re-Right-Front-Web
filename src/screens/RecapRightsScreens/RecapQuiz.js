import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../../config/colors";
export default function RecapQuiz({ navigation }) {
 //sample questions
 const questions = [
   {
     questionText: "Question 1",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 2",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 3 ",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 4",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 5",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 6 ",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 7",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 8",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 9",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 10",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 11",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 12",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 13",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 14",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 15",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 16",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 17",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 18",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 19",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 20",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 21",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 22",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 23",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 24",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 25",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 26",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 27",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 28",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 29",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
   {
     questionText: "Question 30",
     answerOptions: [
       { answerText: "Answer 1", isCorrect: true },
       { answerText: "Answer 2", isCorrect: false },
       { answerText: "Answer 3", isCorrect: false },
     ],
   },
 ];
 
 const [questionNumber, setQuestionNumber] = useState(0);
 const [showScore, setShowScore] = useState(false);
 const [score, setScore] = useState(0);
 const [randomNumber, setrandomNumber] = useState(Math.floor(Math.random() * questions.length)),
  
 createRandomNumber = () => {
     const random = Math.floor(Math.random() * questions.length);
     setrandomNumber(random);
   };
 
 //if user clicks on correct option, score will increase by 1
 const handleAnswerOptionClick = (isCorrect) => {
   if (isCorrect) {
     setScore(score + 1);
   }
 
   const nextQuestion = questionNumber + 1;
   // if no more questions left, show score
   if (nextQuestion < 10) {
     {createRandomNumber();}
     setQuestionNumber(questionNumber + 1);
     
   } else {
     setShowScore(true);
   }
 };
 //  if showScore = true, scores shown. showScore = false, quiz shown.
 return (
   <View style={styles.background}>
     {showScore ? (
       <View style={styles.scoreText}>
         <Text style={styles.score}>You scored {score} out of 10!</Text>
       </View>
     ) : (
       <>
         <Text style={styles.questionNumber}>
           Question {questionNumber + 1} /10
         </Text>
 
         <Text style={styles.question}>
           {questions[randomNumber].questionText}
         </Text>
         {questions[randomNumber].answerOptions.map((answerOption) => (
           <Pressable
             style={({ pressed }) => [
               {
                 borderColor: pressed ? colors.dblue : colors.black,
               },
               styles.answerOption,
             ]}
             onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}
           >
             <Text style={styles.optionText}>{answerOption.answerText}</Text>
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
   justifyContent: "center",
   backgroundColor: colors.white,
 },
 questionNumber: {
   fontSize: 30,
   alignSelf: "center",
   fontWeight: "bold",
   color: colors.dblue,
 },
 question: {
   fontSize: 15,
   margin: 10,
   alignSelf: "center",
 },
 answerOption: {
   margin: 10,
   padding: 10,
   width: "90%",
   alignSelf: "center",
   borderRadius: 10,
   backgroundColor: colors.lightblue,
   justifyContent: "center",
 },
 optionText: {
   fontSize: 18,
   alignSelf: "center",
 },
 score: {
   fontSize: 30,
   alignSelf: "center",
 },
});
 
 

