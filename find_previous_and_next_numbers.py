def get_number_from_user():

    while True:

        try:

            user_input = int(input("Enter a number: "))

            return user_input

        except ValueError:

            print("Error: Please enter a valid integer.")



def find_previous_and_next(number):

    previous_number = number - 1

    next_number = number + 1

    return previous_number, next_number



user_number = get_number_from_user()



previous, next_num = find_previous_and_next(user_number)

print(f"The previous number to {user_number} is {previous}")

print(f"The next number after {user_number} is {next_num}")
