# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.1'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
require 'stylus'

# Accepts a raw string or an IO object (File, StringIO or anything that responds to 'read').
Stylus.compile(File.new('app/assets/stylesheets/application.styl')) # returns the compiled stylesheet.

# Use the :compress option, removing most newlines from the code.

# Enable debug info, which sends the 'linenos' and 'firebug' options to Stylus.
# If you provide a raw content String to the `Stylus.compile` method, remember to send
# a `:filename` option so Stylus can locate your stylesheet for proper inspection.
Stylus.debug = true
#Rails.application.config.assets.precompile += %w( landingpage.styl )
#Rails.application.config.assets.precompile += %w( header.styl )
#Rails.application.config.assets.precompile += %w( profilebox.styl )
#Rails.application.config.assets.precompile += %w( mainbox.styl )
#Rails.application.config.assets.precompile += %w( footer.styl )
#Rails.application.config.assets.precompile += %w( grd.styl )
#Rails.application.config.assets.precompile += %w( profilebox.styl )
#Rails.application.config.assets.precompile += %w( search.styl )