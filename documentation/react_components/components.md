# Components

This file will specify each components purpose and endstate functionality.

- CsrfToke.tsx: 
    - This component was created to allow axios default headers to append both the X-CSRFToken and the sessionid onto it's request headers. This component is utilized on the base of the app to ensure all axios requests within the app have proper permissions.

- Header.tsx: This component will render the top portion of our application, holding the following
    - Sign Up Button: This will cause the sign up form to be displayed if a user is not logged in.
    - App Title: h1 element holding our applications title
    - Log In Button: Clicking this button will deplay the log in form for our user if a user is not logged in
    - Log Out Button: Clicking this button will allow the logged in user to log out
    - RoboHash Icon: An img field integrating a thrid party api to create robot images

- LogIn.tsx:
    - This will render a LogIn form containing an input field for the user email and an input field for the user password. Submitting this form with the proper input will log in a user.

- SignUp.tsx:
    - This will render a Sign Up form containing an input field for the user email and an input field for the user password. Submitting this form with the proper input will create a new user with the corresponding information.