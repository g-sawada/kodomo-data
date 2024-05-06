# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = "1.0"

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )

# fifty_meter_entry.js
# fifty_meter_entry.js.map  
# otoshidama_entry.js
# otoshidama_entry.js.map
# future_entry.js
# future_entry.js.map
# subject_entry.js.map
# subject_entry.js
# react/entrypoints/future_entry.tsx
# react/entrypoints/future_entry.tsx
# react/entrypoints/otoshidama_entry.tsx
# react/entrypoints/subject_entry.tsx

#ここを追加。書き方は色々ある模様
Rails.application.config.assets.precompile += %w(
  fifty_meter_entry.js
  fifty_meter_entry.js.map  
  otoshidama_entry.js
  otoshidama_entry.js.map
  future_entry.js
  future_entry.js.map
  subject_entry.js.map
  subject_entry.js
)