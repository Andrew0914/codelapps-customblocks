<?php
/**
* Plugin Name: Materialize button link
* Author: Andrew G
* Description: A link with materialie button appereance
* Version: 1.0
*/
 
// Load assets for wp-admin when editor is active
function link_materialize_button() {
   wp_enqueue_script(
      'link_materialize_button-block-editor',
      plugins_url( 'link_materialize.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element' )
   );
 
   wp_enqueue_style(
      'link_materialize_button-block-editor',
      plugins_url( 'link_materialize.css', __FILE__ ),
      array()
   );
}
 
add_action( 'enqueue_block_editor_assets', 'link_materialize_button' );
 
// Load assets for frontend
/*function shaiful_gutenberg_notice_block_frontend() {
 
   wp_enqueue_style(
      'link_materialize_button-block-editor',
      plugins_url( 'block.css', __FILE__ ),
      array()
   );
}
add_action( 'wp_enqueue_scripts', 'shaiful_gutenberg_notice_block_frontend' );*/
?>