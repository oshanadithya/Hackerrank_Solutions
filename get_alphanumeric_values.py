def get_alphanumeric_string():

    while True:

        user_input = input("Enter a string with alphanumeric characters: ")

        if user_input.isalnum():

            return user_input

        else:

            print("Error: The input should contain only alphanumeric characters. Try again.")



alphanumeric_string = get_alphanumeric_string()

print("You entered:", alphanumeric_string)