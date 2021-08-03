import React, { useState } from 'react';
import './global';

export default  {

    // Palette start
        primary: "#3987CE",
        primary_dark: "#1E3473",
        primary_light: "#73C7FF",
        secondary: "#007F7F",
        secondary_dark: "#144F4B",
        accent1: "#FCD681",
        accent2: "#EA8071",
        // These color names are depricated, need to move to empty ones below
        black: "#11111E",
        grey: "grey",
        light_grey: "#D3D3D3",
        lighter_grey: '#E0E0E0',
        white: "#fff",

        hyperlink: "#428AF8",
        red: "red",
        active_tab: "#ADD8E6",
        inactive_tab: "#428AF8",
        text_screen_header: "white",
        text_general:  "white",
        text_stack_title: "white",
        text_stack_back_title: "black",
        text_tab_label: "white",
        text_question_number: "#3987CE",
        text_subtitle: "white",
        text_quiz: "white",

        border: "white",
        border_input_text: "black",
        border_button: "black",

        shadow: "black",

        background_screen:  '#181818',
        background_drawer: "grey",
        background_stack_header: "#3987CE",
        background_scrollview: "#3987CE",
        background_friend: "#3987CE",
        background_list_item: '#212121',
        background_post_type: '#212121',

        button_signup: "#FCD681",
        button_login: "#3987CE",
        button_continue: "#3987CE",
        button_submit: "#3987CE",
        button_pressed: "grey",
        button_quiz: "#3987CE",
        button_quiz_pressed: "grey",
        button_retry_quiz: "#3987CE",
        button_retry_quiz_pressed: "grey",
        button_connect: "#3987CE",
        tintColor: 'white',

        // Palette end
        // Don't use these color names anymore 
        //(To be deleted later once components' colors are switched)
        // EDIT -- Most if not all components have been switched to using colors above, might be safe to delete
        blue: "#428AF8",
        light_blue: "#ADD8E6",
        cream: "#FDFCDC",
        dblue: "#0081A7",
    
}