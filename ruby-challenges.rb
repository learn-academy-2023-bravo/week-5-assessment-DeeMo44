# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# create a method named letter_contain that takes an array and a string as parameters
def letter_contain(array, string)
  # use .select to iterate over the array and remove values that do not meet certain conditions
  # use variable word for the string being iterated over
  # use .include? to see if the word has the string and print 
  puts array.select {|word| word.include?(string)}
end

letter_contain(beverages_array, letter_o)
# Output: 
# coffee
# soda water

letter_contain(beverages_array, letter_t)
# Output: 
# water
# soda water

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def hash_value(hash)
  puts hash.values.sort
end

hash_value(us_states)
# Output: 
# California
# Arizona
# Nevada
# Maine
# New Hampshire
# Rhode Island
# Washington
# Oregon
# Idaho

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# create a class called bike
class Bike 
  # Bike is initialized with the bikes model name
  def initialize(model)
    # by default, the bike starts at 0 speed and has 2 wheels. @model recieves the name from model
    @wheels = 2
    @current_speed = 0
    @model = model
  end
  # bike_info is a class method that recieves the initialized variables and prints 
  # a string when invoked using string interpolation
  def bike_info
    p"The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
  end
  # pedal_faster is a class method that recieves a number in the 'speed' parameter
  def pedal_faster(speed)
    # we only want positive numbers for increased speed so it has to be greater 
    # than zero
    if(speed>0)
      # we add the speed number on to our current_speed
     p @current_speed += speed
    end
  end
  # brake is a class method that also recieves the speed parameter
  # in this case it will be the speed deducted from our current_speed
  def brake(speed)
    # if the current_speed - speed would be less than zero - then just make
    # current speed 0, also we want only positive numbers
    if(@current_speed - speed < 0 && speed > 0)
     p @current_speed = 0
    else
     p @current_speed -= speed
    end
  end
end

my_bike = Bike.new('Huffy')
my_bike.bike_info            #"The Huffy bike has 2 wheels and is going 0 mph"

my_bike.pedal_faster(10)    #10
my_bike.bike_info           #"The Huffy bike has 2 wheels and is going 10 mph"

my_bike.brake(5)            #5
my_bike.bike_info           #"The Huffy bike has 2 wheels and is going 5 mph"
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
