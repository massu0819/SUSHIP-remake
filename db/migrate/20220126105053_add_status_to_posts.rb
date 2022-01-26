class AddStatusToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :taste, :integer
    add_column :posts, :price, :integer
    add_column :posts, :mood, :integer
    add_column :posts, :access, :integer
  end
end
