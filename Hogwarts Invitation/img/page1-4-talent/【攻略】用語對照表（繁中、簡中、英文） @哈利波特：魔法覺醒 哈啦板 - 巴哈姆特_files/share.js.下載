(function ($, window, undefined) {
    $(function () {
        // 社群分享 另開新視窗
        $('.community_sharebtn li').not('.copyBtn').click(function(e) {
            let url = $(this).data('url');
            let to = $(this).data('to');

            Share.share(url, to);
        });

        // 複製連結鈕
        $('.community_sharebtn .copyBtn').click(function (e) {
            Share.copy();
        });
    });

    let Share = {
        ga: {
            isSet: false,
            category: '',
            action: '',
            label: ''
        },
        copy: function () {
            let urlInput = $('#copyUrl');

            urlInput.attr('type', 'text');
            if (navigator.userAgent.match(/iPhone|iPod|iPad/i)) {
                let el = urlInput.get(0);
                el.contentEditable = true;
                el.readOnly = false;

                let range = document.createRange();
                range.selectNodeContents(el);
                let sel = window.getSelection();

                sel.removeAllRanges();
                sel.addRange(range);
                el.setSelectionRange(0, 999999);
                el.contentEditable = false;
                el.readOnly = true;
            } else {
                urlInput.select();
            }

            try {
                document.execCommand('copy');
                Dialogify.alert('複製成功');
                if (this.ga.isSet) {
                    this.ga.action = '複製連結';
                    window.ga && window.ga('send', 'event', this.ga.category, this.ga.action, this.ga.label);
                }
            } catch (error) {
                console.log(error);
            }
            urlInput.attr('type', 'hidden');
        },
        share: function (url, to) {
            let windowFeature = 'left=200,top=200,width=720,height=530,scrollbars=1';

            if (this.ga.isSet) {
                switch (to) {
                    case 'wall':
                        this.ga.action = '分享巴哈';
                        break;
                    case 'fb':
                        this.ga.action = '分享fb';
                        break;
                    case 'line':
                        this.ga.action = '分享line';
                        break;
                    case 'twitter':
                        this.ga.action = '分享twitter';
                        break;
                    case 'plurk':
                        this.ga.action = '分享plurk';
                        break;
                    case 'im':
                        this.ga.action = '分享im';
                        break;
                    default:
                        break;
                }

                if (this.ga.action != '') {
                    window.ga && window.ga('send', 'event', this.ga.category, this.ga.action, this.ga.label);
                }
            }

            window.open(url, '', windowFeature);
        },
        setGa: function (category, action, label) {
            this.ga.category = category;
            this.ga.action = action;
            this.ga.label = label;
            this.ga.isSet = true;
        }
    }

    window.Share = Share;
}) (jQuery, window);
