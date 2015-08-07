/* ==============================================================================
 * Bootstrap-Gallery: bootstrap-gallery.js v0.1.0
 * http://github.com/renebentes/bootstrap-gallery
 * ==============================================================================
 * Author: Rene Bentes Pinto <renebentes@yahoo.com.br>
 * Link: http://renebentes.github.io
 * Copyright 2015 Rene Bentes Pinto, Inc. All rights reserved.
 * License under the terms of the MIT; see LICENSE
 * ============================================================================== */

+function($) {
  'use strict';

  if (!$.fn.modal) throw new Error('Gallery requires Bootstrap Modal.js')

  // GALLERY CLASS DEFINITION
  // ========================

  var Gallery = function (element, options) {
    this.$body    = $(document.body)
    this.$element = $(element)
    this.options  = $.extend({}, Gallery.DEFAULTS, options)
    this.$target  = this.$element.attr('data-target') ? this.$element.attr('data-target') : this.$element.attr('href')
    /*this.count     = this.$parent.children().length
    this.index     = this.$element.parent().index()*/

    this.template = {
      dialog: '<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-body">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>',
      header: '<div class="modal-header">' +
        '<button type="button" class="btn btn-default btn-sm" data-dismiss="modal">' +
        '<span class="fa fa-times" aria-hidden="true"></span>' +
        '<span class="sr-only">Close</span>' +
        '</button>' +
        '</div>',
      image: '<img src="" class="img-responsive center-block" alt="" title="" />',
      footer: '<div class="modal-footer"></div>',
      legend: '<div class="caption"></div>',
      control: '<div class="btn-group control">' +
        '<button type="button" class="btn btn-default prev"><i class="fa fa-chevron-left"></i></button>' +
        '<button type="button" class="btn btn-default next"><i class="fa fa-chevron-right"></i></button>' +
        '</div>'
    }
  }

  Gallery.VERSION = '0.1.0'

  Gallery.DEFAULTS = {
  }

  Gallery.prototype.show = function () {
    console.log(this.$target)
  }

  // GALLERY PLUGIN DEFINITION
  // =========================

  function Plugin (option) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.gallery')
      var options = typeof option == 'object' && option

      if (!data) $(this).data('bs.gallery', (data = new Gallery(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.gallery

  $.fn.gallery             = Plugin
  $.fn.gallery.Constructor = Gallery


  // GALLERY NO CONFLICT
  // ===================

  $.fn.gallery.noConflict = function () {
    $.fn.gallery = old
    return this
  }

  // GALLERY DATA API
  // ================

  $(document).on('click.bs.gallery.data-api', '[data-toggle="gallery"]', function (e) {
    e.preventDefault()

    Plugin.call($(this), 'show')
  })
}(jQuery);
