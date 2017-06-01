class CreditType < ApplicationRecord
  has_many :credits, :dependent => :destroy
end
