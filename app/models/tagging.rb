# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  tag_id     :integer
#  theme_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tagging < ApplicationRecord
  validates :tag_id, :theme_id, presence: true

  belongs_to :tag, inverse_of: :taggings
  belongs_to :theme, inverse_of: :taggings
end
