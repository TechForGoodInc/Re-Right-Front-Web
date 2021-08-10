<!DOCTYPE html>
<html>
   <body>
      <h1>Markdown README</h1>
      <h1>What is Re-Right?</h1>
         Re-Right is a platform aiming to support and provide a safe space for victims of human rights violations (HRVs), simultaneously providing data analytics useful in the study, prediction, and hopefully prevention of HRVs throughout the US, and eventually, the globe. Re-Right contains five major components, all highly focused around user anonymity: Home, Recap Rights, Report Abuse, Reach Out, and Research Analytics.


<h4>Home</h4>
Blurb Blurb
Feed of posts from user and their friends. User can access profile, settings, new post, and friends features from this page. Hamburger menu drops down the following four additional options.

<h4>Recap Rights</h4>
Blurb Blurb
Cache of information about various human rights. It is vital everybody understands their rights

<h4>Report Abuse</h4>
Blurb Blurb
Allows users to submit reports of HRVs committed against them. ML team also working on an autonomous abuse detection and reporting service for external social media platforms

<h4>Reach Out</h4>
Blurb Blurb
Chatroom and user matching service to connect people with similar or different experiences

<h4>Research Analytics</h4>
Blurb Blurb
Analytical tools utilizing our HRV report database

<h1>Glossary</h1>
   <ul>
      <li> App.js</h3> </li>
      <li> app.json</h3> </li>
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
      <li>babel.config.js</li>
      <li>
         <h4>config</h4>
         <ul>
            <li>colors.js --> A centralized style pallet of all colors used for the whole app</li>
            <li>darkColors.js --> A centralized style pallet of all darkcolors used for the whole app</li>
            <li>GetGlobalStyles.js </li>
            <li>global.js </li>
         </ul>
      </li>
      <li>metro.config.js</li>
      <li>package-lock.json</li>
      <li>package.json</li>
      <li>README</li>
      <li>
         <h4>src</h4>
         <ul>
            <li>
               <h4>components</h4>
               <ul>
                  <li>CheckBoxHybrid.js </li>
                  <li>FancyTextInput.js </li>
                  <li>navigation </li>
                  <li>FriendsScreenNavWrapper.js </li>
                  <li>HomeDrawerNav.js </li>
                  <li>StackHeaderBackImage.js </li>
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
                        <li>HomeTabNav.js </li>
                        <li>ReachOutTabNav.js </li>
                        <li>RecapRightsTabNav.js </li>
                        <li>ReportAbuseTabNav.js </li>
                        <li>ResearchTabNav.js </li>
                     </ul>
                  </li>
               </ul>
            </li>
            <li>ReRightApp.js </li>
            <li>
               <h4>screens</h4>
               <ul>
                  <li>
                     <h4>ForgetPasswordScreens</h4>
                     <ul>
                        <li>ForgotPassScreen1.js </li>
                        <li>ForgotPassScreen2.js </li>
                        <li>ForgotPassScreen3.js </li>
                        <li>ForgotPassScreen4.js </li>
                     </ul>
                  </li>
                  <li>
                     <h4>HomeScreens</h4>
                     <ul>
                        <li>AccountSettingsScreen.js </li>
                        <li>ChangeEmailScreen.js </li>
                        <li>ChangePasswordScreen.js </li>
                        <li>ChangeUsernameScreen.js </li>
                        <li>ChatScreen.js </li>
                        <li>CreatePostScreen.js </li>
                        <li>DevicePostScreen.js </li>
                        <li>FriendProfileScreen.js </li>
                        <li>FriendsScreen.js </li>
                        <li>HomeScreen.js </li>
                        <li>PostPreview.js </li>
                        <li>ProfileScreen.js </li>
                        <li>RecommendedFriendsScreen.js </li>
                        <li>SampleFriend.js </li>
                        <li>SamplePost.js </li>
                        <li>StylizedPostScreen.js </li>
                        <li>StylizedPostScreen2.js </li>
                        <li>TextPostScreen.js </li>
                        <li>UsableSearchBar.js </li>
                        <li>LoggetOutScreen.js </li>
                        <li>LoginScreen.js </li>
                     </ul>
                  </li>
                  <li>
                     <h4>ReachOutScreens</h4>
                     <ul>
                        <li>ReachOutScreen1.js </li>
                        <li>ReachOutScreen2.js </li>
                        <li>SampleChats.js </li>
                     </ul>
                  </li>
                  <li>
                     <h4>RecapRightScreens</h4>
                     <ul>
                        <li>RecapArticle.js </li>
                        <li>RecapQuiz.js </li>
                        <li>RecapRightsScreen1.js </li>
                     </ul>
                  </li>
                  <li>
                     <h4>ReportAbuseScreens</h4>
                     <ul>
                        <li>AboutReportAbuseScreen.js </li>
                        <li>ReportAbuseRecapArticle.js </li>
                        <li>ReportAbuseRecapQuiz.js </li>
                        <li>ReportAbuseRecapRightsScreen.js </li>
                        <li>ReportAbuseScreen1.js </li>
                        <li>ReportAbuseScreen2.js </li>
                     </ul>
                  </li>
                  <li>
                     <h4>ResearchAnalyticsScreens</h4>
                     <ul>
                        <li>MapToolScreen.js </li>
                        <li>ReasearchScreen.js </li>
                        <li>SubmitSuggestionScreen.js </li>
                     </ul>
                  </li>
                  <li>
                     <h4>SignupScreens</h4>
                     <ul>
                        <li>SignupScreen1.js </li>
                        <li>SignupScreen2.js </li>
                        <li>SignupScreen3.js </li>
                        <li>SignupScreen4.js </li>
                     </ul>
                  </li>
               </ul>
            </li>
         </ul>
      </li>
   </ul>
   <h4>Header 4</h4>
   <h5>Header 5</h5>
   <h6>Header 6</h6>
</body>
</html>
