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
    when 0..16.0
        "Severe Thinness"
    when 16.0..17.0
        "Moderate Thinness"
    when 17.0..18.5
        "Mild Thinness"
    when 18.5..25.0
        "Normal"
    when 25.0..30.0
        "Overweight"
    when 30.0..35.0
        "Obese Class I"
    when 35.0..40.0
        "Obese Class II"
    else
        if bmi > 40.0
            "Obese Class III"
        end
    end
end

bmi_calculator
