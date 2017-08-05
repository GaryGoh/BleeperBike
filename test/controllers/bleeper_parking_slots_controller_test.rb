require 'test_helper'

class BleeperParkingSlotsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bleeper_parking_slot = bleeper_parking_slots(:one)
  end

  test "should get index" do
    get bleeper_parking_slots_url
    assert_response :success
  end

  test "should get new" do
    get new_bleeper_parking_slot_url
    assert_response :success
  end

  test "should create bleeper_parking_slot" do
    assert_difference('BleeperParkingSlot.count') do
      post bleeper_parking_slots_url, params: { bleeper_parking_slot: { address: @bleeper_parking_slot.address, address_line1: @bleeper_parking_slot.address_line1, address_line2: @bleeper_parking_slot.address_line2, city: @bleeper_parking_slot.city, country: @bleeper_parking_slot.country, latitude: @bleeper_parking_slot.latitude, longitude: @bleeper_parking_slot.longitude } }
    end

    assert_redirected_to bleeper_parking_slot_url(BleeperParkingSlot.last)
  end

  test "should show bleeper_parking_slot" do
    get bleeper_parking_slot_url(@bleeper_parking_slot)
    assert_response :success
  end

  test "should get edit" do
    get edit_bleeper_parking_slot_url(@bleeper_parking_slot)
    assert_response :success
  end

  test "should update bleeper_parking_slot" do
    patch bleeper_parking_slot_url(@bleeper_parking_slot), params: { bleeper_parking_slot: { address: @bleeper_parking_slot.address, address_line1: @bleeper_parking_slot.address_line1, address_line2: @bleeper_parking_slot.address_line2, city: @bleeper_parking_slot.city, country: @bleeper_parking_slot.country, latitude: @bleeper_parking_slot.latitude, longitude: @bleeper_parking_slot.longitude } }
    assert_redirected_to bleeper_parking_slot_url(@bleeper_parking_slot)
  end

  test "should destroy bleeper_parking_slot" do
    assert_difference('BleeperParkingSlot.count', -1) do
      delete bleeper_parking_slot_url(@bleeper_parking_slot)
    end

    assert_redirected_to bleeper_parking_slots_url
  end
end
