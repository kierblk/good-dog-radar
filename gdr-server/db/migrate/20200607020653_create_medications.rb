class CreateMedications < ActiveRecord::Migration[6.0]
  def change
    create_table :medications do |t|
      t.string :med_name
      t.string :med_reason
      t.string :med_instructions
      t.string :med_frequency
      t.string :med_dosage
      t.string :med_prescriber_name
      t.string :med_prescriber_phone

      t.timestamps
    end
  end
end
