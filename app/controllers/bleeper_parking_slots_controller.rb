class BleeperParkingSlotsController < InheritedResources::Base

  private

    def bleeper_parking_slot_params
      params.require(:bleeper_parking_slot).permit(:address, :address_line1, :address_line2, :city, :country, :longitude, :latitude)
    end
end

