<?php
class MFN_Options_select extends Mfn_Options_field
{

	/**
	 * Render
	 */

	public function render( $meta = false, $vb = false, $js = false )
	{

		$js_ex_0 = false;

		if( $js && strpos($js, '][') !== false ){
			$js_ex = explode('][', $js);
			$js_ex_0 = $js_ex[0].']';
		}

		$preview = '';

		// preview

		if ( ! empty( $this->field['preview'] ) ){
			$preview = 'preview-'. $this->field['preview'];
		}

		// WPML

		if ( ! empty( $this->field['wpml'] ) ) {
			if ( $this->value && function_exists( 'icl_object_id' ) ) {
				$term = get_term_by( 'slug', $this->value, $this->field['wpml'] );
				$term = apply_filters( 'wpml_object_id', $term->term_id, $this->field['wpml'], true );
				$this->value = get_term_by( 'term_id', $term, $this->field['wpml'] )->slug;
			}
		}

		// output -----

		if( $js ){
			echo '<select class="mfn-form-control mfn-field-value mfn-form-select '. esc_attr( $preview ) .'" '. $this->get_name( $meta ) .' autocomplete="off">';
				if ( is_array( $this->field['options'] ) ) {

					foreach ( $this->field['options'] as $k => $v ) {
						if( $js_ex_0 && !empty($js_ex_0) ){
							echo '<option \'+( '.$js_ex_0.' && typeof '.$js_ex_0.' !== \'undefined\' && '.$js.' && typeof '.$js.' !== \'undefined\' && '.$js.' == "'. esc_attr($k) .'" ? "selected" : "") +\' value="'. esc_attr($k) .'">'. esc_html($v) .'</option>';
						}else{
							echo '<option \'+('.$js.' && typeof '.$js.' !== \'undefined\' && '.$js.' == "'. esc_attr($k) .'" ? "selected" : "") +\' value="'. esc_attr($k) .'">'. esc_html($v) .'</option>';
						}
					}
					
				}
			echo '</select>';
		}else{
		echo '<div class="form-group">';
			echo '<div class="form-control">';

				echo '<select class="mfn-form-control mfn-field-value mfn-form-select '. esc_attr( $preview ) .'" '. $this->get_name( $meta ) .' autocomplete="off">';
					if ( is_array( $this->field['options'] ) ) {
						foreach ( $this->field['options'] as $k => $v ) {
							echo '<option value="'. esc_attr($k) .'" '. selected($this->value, $k, false) .'>'. esc_html($v) .'</option>';
						}
					}
				echo '</select>';

			echo '</div>';
		echo '</div>';

		}

		if( ! $vb ){
			echo $this->get_description();
		}

	}
}
