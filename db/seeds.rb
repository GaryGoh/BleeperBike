# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Admin
AdminUser.create!(email: 'hugh@bleeperbike.com', password: 'hugh2017', password_confirmation: 'hugh2017')
AdminUser.create!(email: 'mgao@bleeperbike.com', password: 'gmq1990929', password_confirmation: 'gmq1990929')

# Copyright
Copyright.create!(context: 'Copyright © 2016-2017 BleeperBike')

# Credit Type
gain_points = CreditType.create!(credit_type: 'Gain Points')
lose_points = CreditType.create!(credit_type: 'Lose Points')

# Gain points
gain_points.credits.create!(clause: 'Each ride', point: 1, point_text: '+1', priority: 1)
gain_points.credits.create!(clause: 'Report broken bike', point: 1, point_text: '+1', priority: 1)
gain_points.credits.create!(clause: 'Report incorrect parking', point: 1, point_text: '+1', priority: 1)
gain_points.credits.create!(clause: "Using another user's invitation code when Registering", point: 1, point_text: '+1', priority: 1)
gain_points.credits.create!(clause: 'Successfully invite a friend to useBleeperBikes', point: 1, point_text: '+1', priority: 1)

# Lose points
lose_points.credits.create!(clause: 'Parking in a compound', point: 20, point_text: '-20', priority: 1)
lose_points.credits.create!(clause: 'Abandoning the bike', point: 50, point_text: '-50', priority: 1)
lose_points.credits.create!(clause: 'Forget to lock,but eventually retrieve the bike', point: 65535, point_text: 'Reduce to 0', priority: 1)
lose_points.credits.create!(clause: 'Useing a private lock', point: 65535, point_text: 'Reduce to 0', priority: 1)
lose_points.credits.create!(clause: 'Forget to lock and bike is lost', point: 65535, point_text: 'Reduce to 0', priority: 1)

# Payment options
PaymentOption.create!(clause: '€5 top up gets 7 (30 min) rides', priority:1)
PaymentOption.create!(clause: '€25 top up gets 36 (30 min) rides', priority:1)
