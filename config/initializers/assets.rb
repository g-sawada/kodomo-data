# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = "1.0"

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )

#ここを追加。書き方は色々ある模様
Rails.application.config.assets.precompile += %w(
  react/entrypoints/fifty_meter_entry.tsx
  react/entrypoints/future_entry.tsx
  react/entrypoints/otoshidama_entry.tsx
  react/entrypoints/subject_entry.tsx
)