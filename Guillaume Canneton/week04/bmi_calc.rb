def bmi_calculator
  puts "This is a BMI calculator"
  puts "-=" * 40
  print "Please enter your height (in cm):"
  height = gets.to_f
  print "Enter your weight (in kg):"
  weight = gets.to_f

  bmi = (weight / ( ( height / 100.0 ) ** 2.0 ) * 100.0).round / 100.0

  puts " Your bmi is #{bmi}"

  puts case bmi
when bmi < 16.0
  "Severe Thinness"
when bmi >= 16.0 && bmi < 17.0
  "Moderate Thinness"
when bmi >= 17.0 && bmi < 18.5
  "Mild Thinness"
when bmi >= 18.5 && bmi < 25.0
  "Normal"
when bmi >= 25.0 && bmi < 30.0
  "Overweight"
when bmi >= 30.0 && bmi < 35.0
  "Obese Class I"
when bmi >= 35.0 && bmi < 40.0
  "Obese Class II"
when bmi >= 40.0
  "Obese Class III"
end
end

bmi_calculator
