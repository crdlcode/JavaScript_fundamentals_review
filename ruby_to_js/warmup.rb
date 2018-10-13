# total = 0
# 100.times do |num|
#   total += num
# end
# puts total

(3..15).each do |height|
  if height > 9
    puts "You can get on the rollercoaster!"
  else
    puts "You are too short to ride this rollercoaster."
  end
end
