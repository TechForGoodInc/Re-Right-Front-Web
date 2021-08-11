<!DOCTYPE html>
<html>
   <body>
      <h1>Markdown README</h1>
      <h1>What is Re-Right?</h1>
      Re-Right is a platform aiming to support and provide a safe space for victims of human rights violations (HRVs), simultaneously providing data analytics useful in the study, prediction, and hopefully prevention of HRVs throughout the US, and eventually, the globe. Re-Right contains five major components, all highly focused around user anonymity: Home, Recap Rights, Report Abuse, Reach Out, and Research Analytics.
      <h4>Home</h4>
      Feed of posts from user and their friends. User can access profile, settings, new post, and friends features from this page. Hamburger menu drops down the following four additional options.
      <h4>Recap Rights</h4>
      Cache of information about human rights as outlined in the Universal Declaration of Human Rights:
      https://www.un.org/en/about-us/universal-declaration-of-human-rights. It is vital that everybody
      understands their rights.
      Recap Rights also contains a "test your knowledge" experience: questions spanning important
      takeaways from the Universal Declaration of Human Rights.
      <h4>Report Abuse</h4>
      Allows users to submit reports of HRVs committed against them. ML team also working on an autonomous abuse detection and reporting service for external social media platforms
      <h4>Reach Out</h4>
      Chatroom and user matching service to connect people with similar or different experiences
      <h4>Research Analytics</h4>
      Analytical tools utilizing our HRV report database
      <h1>Glossary</h1>
      <ul>
         <li> App.js --> The file that runs the whole app </li>
         <li> app.json --> A file that is automatically created for expo</li>
         <li>
            <h4>assets</h4>
            <ul>
               <li>adaptive-icon.png --> A default image for Expo </li>
               <li>chat.png --> Picture of two text bubbles overlapping</li>
               <li>ChatIcon.png --> Picture of one rectangular text bubble</li>
               <li>cross-round.png --> Picture of a transparent "X" in a black circle </li>
               <li>cross.png --> Picture of a rectangular "X </li>
               <li>delete-button.png --> Picture of a rectangular "X" with rounded-off edges</li>
               <li>download.png --> Picture of a block arrow pointing down</li>
               <li>editing.png --> Picture of a transparent pad and pencil overlapping </li>
               <li>email.png --> Picture of a transparent envelope outline on a black circle  </li>
               <li>favicon.ong --> A default image for Expo </li>
               <li>FriendsIcon.png --> A picture of three person icons, with the center one being in front of the other two</li>
               <li>heart.png --> A picture of a transparent heart with a black outline</li>
               <li>HMIcon.png --> A picture of three black ovals arranged as a Hamburger Menu</li>
               <li>home.png --> A picture of a house icon</li>
               <li>icon.png --> A default image for Expo</li>
               <li>like.png --> A picture of a transparent right hand, with a black outline, giving a thumbs up</li>
               <li>logo_icon.png --> A picture of three blue arms of different tones interlocking to form the letter "R"</li>
               <li>logo_text.png --> A picture of the word "RE-RIGHT" in blue </li>
               <li>man.png --> A picture of a person icon with black hair, tan skin, a red shirt, and a white empty oval on their left chest </li>
               <li>padlock.png --> A picture of a black padlock with a transparent cutout of a keyhole in the center</li>
               <li>PostIcon.png --> A picture of a transparent and rounded "+" in a black circle</li>
               <li>private.png --> A picture of a transparent padlock with a black outline and a black outline of a keyhole in its center</li>
               <li>ProfileIcon.png --> A picture of a face icon: one transparent circle with a black outline with black hair parted on the left and two black circles for eyes </li>
               <li>rerightlogo.png --> A picture of the combination of logo_icon.png and logo_text.png with the former being on top of the latter</li>
               <li>research.png --> A picture of a white piece of paper with grey parallel lines running horizontally across with a dog-ear on its top-left corner, being covered by a magnifying glass that has blue glass and an orange handle, all in a grey circle</li>
               <li>right-arrow.png --> A picture of a rounded black">" </li>
               <li>search.png  --> A picture of an out of focus black outline of a magnifying glass</li>
               <li>settings.png --> A picture of an black wrench facing the top right of the image on top of a 8-toothed gear (with on of the teeth being covered by the wrench</li>
               <li>splash.png --> A default image for Expo</li>
               <li>stylizedPost.png --> A picture of a blue background that contains a white rectangle in the foreground containing the word "Positive" on top of the word "Vibes" in black ink and script</li>
               <li>
                  <h4>textures</h4>
                  <ul>
                     <li>brick_wall.png --> A picture of a part of a walll with light grey/tan bricks</li>
                     <li>stone_wall.png  --> A picture of a part of a walll with tan bricks that seem to have pieces vut out of their tops</li>
                  </ul>
               </li>
               <li> user.png  --> A picture of a transparent circle with a black outline containing a person icon that is also transparent and oiutlined in black</li>
               <li> userpfp.png  --> A picture of user.png but no outline and the circle is white and the person icon is grey</li>
            </ul>
         </li>
         <li>babel.config.js --> Automatically created file for expo (download if it isn't)</li>
         <li>
            <h4>config</h4>
            <ul>
               <li>colors.js --> A centralized style pallet of all colors used for the whole app</li>
               <li>darkColors.js --> A centralized style pallet of all darkcolors used for the whole app</li>
               <li>GetGlobalStyles.js --> This file contains styles that are used multiple times throughout the application.
                  By storing these styles globally, we can alter the layout and styles of
                  components app wide just by editing this file.
               </li>
               <li>global.js --> A way to toggle darkMode between off and on and have the rest of the code be aware of the change</li>
            </ul>
         </li>
         <li>metro.config.js --> Automatically created file for expo (download if it isn't)</li>
         <li>package-lock.json --> Automatically created to run app (download if it isn't) </li>
         <li>package.json --> Automatically created to run app (download if it isn't)</li>
         <li>README --> This file</li>
         <li>
            <h4>src</h4>
            <ul>
               <li>
                  <h4>components</h4>
                  <ul>
                     <li>CheckBoxHybrid.js --> Changes the style of a Check Box based on the platform the user is using</li>
                     <li>FancyTextInput.js --> Adds aesthetics to a text input by adding effects such as blur/focus, color, and style</li>
                     <li>
                        <h4>navigation</h4>
                        <ul>
                           <li>FriendsScreenNavWrapper.js --> used to render the FriendsScreen file and pass {navigation} to it as props.</li>
                           <li>HomeDrawerNav.js --> the navigation component (a <Drawer>) that creates the hamburger menu funcitonality. It is nested inside of the ReRightApp.js stack navigation</li>
                           <li>StackHeaderBackImage.js --> the file that determines what icon to display in the header (it displays different icon based on ios vs web/android </li>
                           <li>
                              <h4>StackNavs</h4>
                              <ul>
                                 <li>ChatStackNav.js --> The Stack for the Chat Screens and their navigation </li>
                                 <li>CreatePostStackNav.js --> The Stack for the Creating a Post and their navigation</li>
                                 <li>EntryStackNav.js --> The Stack for the start of the application</li>
                                 <li>FriendsStackNav.js --> The Stack for the Friends page navigation</li>
                                 <li>HomeStackNav.js --> The Stack for the Home page navigation (hamburger menu, bottom tabs, profile) </li>
                                 <li>ProfileStackNav.js --> The Stack for the Profile page their navigation</li>
                                 <li>ReachOutStackNav.js --> The Stack for the Reach Out and its navigation</li>
                                 <li>RecapRightsStackNav.js --> The Stack for the Recap Rights and its navigation (quiz, article, more descriptive explanations of rights)</li>
                                 <li>ReportAbuseStackNav.js --> The Stack for the Reportin Abuse and its navigation (going to RecapRights, submitting story, and other factors)</li>
                                 <li>ReasearchStackNav.js --> The Stack for the Research Analytics and its navigation (page with map, submit suggestion)</li>
                              </ul>
                           </li>
                           <li>
                              <h4>TabNavs</h4>
                              <ul>
                                 <li>HomeTabNav.js --> Formats the home page's bottom bar of tabs</li>
                                 <li>ReachOutTabNav.js --> Formats reach out screen's bottom bar of tabs</li>
                                 <li>RecapRightsTabNav.js  --> Formats recap right screen's bottom bar of tabs</li>
                                 <li>ReportAbuseTabNav.js --> Formats report abuse screen's bottom bar of tabs</li>
                                 <li>ResearchTabNav.js --> Formats research analytics screen's bottom bar of tabs</li>
                              </ul>
                           </li>
                           <li> WebNavMenu.js --> A placehold file for testing</li>
                        </ul>
                     </li>
                  </ul>
               </li>
               <li>ReRightApp.js --> Sets up the whole stack navigation for the entire login/logout/forgot password screens that lands on the home page</li>
               <li>
                  <h4>screens</h4>
                  <ul>
                     <li>
                        <h4>ForgetPasswordScreens</h4>
                        <ul>
                           <li>ForgotPassScreen1.js --> Promtps user to enter in their username or email with a "continue" button to submit the entry</li>
                           <li>ForgotPassScreen2.js --> Promtps user to enter in the code they received by email with a "continue" button to submit the entry</li>
                           <li>ForgotPassScreen3.js --> Promtps user to answer three security questions with a "continue" button to submit the entries </li>
                           <li>ForgotPassScreen4.js --> Promtps user to enter a new password in one field and to confirm the password in the field below it with a "submit" button to save the change</li>
                        </ul>
                     </li>
                     <li>
                        <h4>HomeScreens</h4>
                        <ul>
                           <li>AccountSettingsScreen.js --> A screen that allows the user to access multiple ways to change aspects of their account (email, username, password, darkmode, etc.)</li>
                           <li>ChangeEmailScreen.js --> Promtps user with three fields in order to change their email: new email, confirm new email, and password. This is followed by a "continue" button to submit the change </li>
                           <li>ChangePasswordScreen.js --> Promtps user with three fields in order to change their password: new password, confirm new password, and current password. This is followed by a "continue" button to submit the change </li>
                           <li>ChangeUsernameScreen.js Promtps user with three fields in order to change their username: new username, confirm new username, password. This is followed by a "continue" button to submit the change </li>
                           <li>ChatScreen.js --> same as ReachOutScreen2.js </li>
                           <li>CreatePostScreen.js --> Prompts user to select one of three possible ways to post: stylized post type, text post type, or a post from the device. Each type is a blue button that the user can press in order to make their selection</li>
                           <li>DevicePostScreen.js --> The screen pressing on "from device" selection from CreatePostScreen.js will bring you. Just a placeholder white screen</li>
                           <li>FriendProfileScreen.js --> A placeholder file for future development for when the user selects a friend and wants to view their profile </li>
                           <li>FriendsScreen.js --> Presents the user with a list of users that are the user's friends. Each friends has a red button labeled "Unfriend" that will remove that user from the list of friends once pushed. The screen itself has a searchbar and one more button, "Recommended Friends", that will take the user to RecommendedFriendsScreen.js if pressed.
                           <li>PostPreview.js -> A placeholder file for future development for when the user wants to see the post they have created will look like before they post it </li>
                           <li>ProfileScreen.js --> The screen that displays the user's information as well as their previous posts, tags, and posts they have liked. There is settings.png in the top right of the screen that the user can press on to take them to AccountSettingsScreen.js </li>
                           <li>RecommendedFriendsScreen.js --> Presents the user with a list of users that relate to the user because of their tags. Each friends has a green button labeled "Request Friend" and the screen itself has two more buttons: "See New Changes" and "Change Criteria" </li>
                           <li>SampleFriend.js --> Code used for each friend in the sample list of friends in ChatScreen.js </li>
                           <li>SamplePost.js </li> --> Code used for each post in the sample feed in HomeScreen.js
                           <li>StylizedPostScreen.js  --> The screen pressing on "Choose Stylized Post Type" selection from CreatePostScreen.js will bring the user. Presents the user the option of selecting the background color (by providing numerous colors/shades), typing the text they want, and the image they want for the post.
                           <li>StylizedPostScreen2.js --> The screen pressing on "Next" in StylizedPostScreen.js will bring the user. Allows for more editing and text editing. </li>
                           <li>TextPostScreen.js -> The screen pressing on "Choose Stylized Text Type" selection from CreatePostScreen.js will bring you. Just a placeholder white screen</li></li>
                           <li>UsableSearchBar.js --> Code for the searchbar that appears in ChatScreen.js for organizational purposes but also so that extra attributes can be added and expanded with ease</li>
                        </ul>
                     </li>
                     <li>LoggetOutScreen.js --> Used to be landing page for whole application. Prompted the user to either to contimue to the sign up or to login.</li>
                     <li>LoginScreen.js --> Displays rerightlogo.png above two fields that prompt the user to enter their username/email and their password. Below these fields are clickable blue text: "Create Account"(takes the user to SignupScreen1.js) and "Forgot Password" (takes the user to ForgotPassScreen1.js). Below the blue text is a "continue" button that takes the user to HomeScreen.js </li>
                     <li>
                        <h4>ReachOutScreens</h4>
                        <ul>
                           <li>ReachOutScreen1.js --> A screen that presents the user with a checkbox list of how they would prefer to match with people</li>
                           <li>ReachOutScreen2.js --> A screen that shows how the chat screen would look like</li>
                           <li>SampleChats.js --> Code for each sample chat that appears on ReachOutScreen2.js</li>
                        </ul>
                     </li>
                     <li>
                        <h4>RecapRightScreens</h4>
                        <ul>
                           <li>RecapArticle.js --> The code for the pressable blurbs, allowing a press to redirect the user to a more detailed description of the HR </li>
                           <li>RecapQuiz.js --> The page for the quiz that asks 10 multiple choice questions with three choices, and at the end presents the user their score of correct answers</li>
                           <li>RecapRightsScreen1.js --> The screen that lists out all of one's human rights. The rights ar numbered an appear as pressable blurbs that when pressed, show a more detailed decription of the HR</li>
                        </ul>
                     </li>
                     <li>
                        <h4>ReportAbuseScreens</h4>
                        <ul>
                           <li>AboutReportAbuseScreen.js </li>
                           <li>ReportAbuseRecapArticle.js --> Same as RecapArticle.js but for the ReportAbuse stack</li>
                           <li>ReportAbuseRecapQuiz.js --> Same as RecapQuiz.js but for the ReportAbuse stack</li>
                           <li>ReportAbuseRecapRightsScreen.js --> Same as RecapRightsScreen1.js but for the ReportAbuse stack</li>
                           <li>ReportAbuseScreen1.js --> Prompts the user to enter in what had happened for them and provides a white text box for the user to enter their story</li>
                           <li>ReportAbuseScreen2.js --> When the "Continue" button on ReportAbuseScreen1.js is pressed, this screen prompts the user with four more textinputs for more details on the incident, as well as a button to redirect the user to recapright pages if they forgot their rights</li>
                        </ul>
                     </li>
                     <li>
                        <h4>ResearchAnalyticsScreens</h4>
                        <ul>
                           <li>MapToolScreen.js --> The landing screen for ResearchAnalytics, provides the user with two options: to view the HRV reported map or submit a suggestion on how to improve the app</li>
                           <li>ReasearchScreen.js --> The page that contains a map of all HRV reportings in the world; the user can filter which reportings are shown based on two menus that contains which HRV was violated and what year the HRV was reported </li>
                           <li>SubmitSuggestionScreen.js --> Prompts used to enter a suggestion for how they would like to improve the app with a textinput followed by a "submit" button</li>
                        </ul>
                     </li>
                     <li>
                        <h4>SignupScreens</h4>
                        <ul>
                           <li>SignupScreen1.js --> Promtps user with five entries: Email, Username, Date of Birth, Password, and confirm password with a "continue" button to submit the entries </li>
                           <li>SignupScreen2.js --> Promtps user to answer three security questions with a "continue" button to submit the entries </li>
                           <li>SignupScreen3.js --> Promtps user to set up their public profile with two fields: one asks for a fake name and another where the user can add tags to let people know what best describes the user</li>
                           <li>SignupScreen4.js --> Promtps user to check or not check which social media platforms they want the app to connect with for social media abuse tracking</li>
                        </ul>
                     </li>
                  </ul>
               </li>
            </ul>
         </li>
      </ul>
   </body>
</html>
