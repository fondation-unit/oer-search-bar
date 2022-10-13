<?php

/**
 * Plugin Name: OER Search Bar
 *
 * @author            Pierre Duverneix
 * @copyright         2022 Fondation UNIT
 * @license           GPL-2.0-or-later
 * Plugin URI:        https://github.com/fondation-unit/oer-search-bar
 * Description:       Wordpress block displaying an external search bar
 * Version:           1.0.0
 * Text Domain:       oersearchbar
 *
 * @package           oersearchbar
 */

const OER_SEARCH_BAR_DIR = '/oer-search-bar/dist/';

function oersearchbar_register_block() {
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.bundle.asset.php');

    wp_register_script(
        'oersearchbar',
        plugins_url('build/index.bundle.js', __FILE__),
        $asset_file['dependencies'],
		$asset_file['version']
    );

    wp_localize_script(
        'oersearchbar',
        'OER_SEARCH_BAR',
        ['url' => get_option('oersearchbar_url', '')]
    );

    register_block_type('oersearchbar/block', array(
        'editor_script' => 'oersearchbar'
    ));
}

add_action('init', 'oersearchbar_register_block');

// Settings
register_setting('oersearchbar_option-group', 'oersearchbar_url');

add_action('admin_menu', 'oersearchbar_admin_menu');

function oersearchbar_admin_menu() {
	add_options_page(__('OER Search Bar', 'oersearchbar'), 'OER Search Bar', 'manage_options', basename(__FILE__), 'oersearchbar_options');
}

function oersearchbar_options(){
	if (!current_user_can('manage_options'))  {
		wp_die( __('You do not have sufficient permissions to access this page.') );
	}

	print '<form method="post" action="options.php" id="oersearchbar_form">';
	wp_nonce_field('update-options', '_wpnonce');
    settings_fields('oersearchbar_option-group');

    print '<div class="wrap">';
    print '<h2>'.__('OER Search Bar', 'oersearchbar').'</h2>';
    print '<table class="form-table">
        <tr valign="top">
            <th scope="row">'.__('Settings', 'oersearchbar').'</th>
        </tr>
        <tr>
        <td>
            API url
        </td>
        <td>
            <input type="text" name="oersearchbar_url" value="' . get_option("oersearchbar_url") . '" size="50">
        </td>
        </tr>
        </table>';
    print '<p class="submit"><input type="submit" name="submit" value="'.__('Save Changes', 'oersearchbar').'" /></p>';
    print '</form>';
    print '</div>';
}
