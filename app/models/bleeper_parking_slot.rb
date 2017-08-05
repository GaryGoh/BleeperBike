class BleeperParkingSlot < ApplicationRecord
  geocoded_by :address # can also be an IP address
  after_validation :geocode # auto-fetch coordinates

  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode # auto-fetch address

  def address
    [address_line1, address_line2, city, country].compact.join(', ')
  end
end
