/**
* 2007-2020 Ifthenpay Lda
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @copyright 2007-2020 Ifthenpay Lda  
*  @author    Ifthenpay Lda <ifthenpay@ifthenpay.com>
*  @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
*/

const mix = require('laravel-mix');

mix.ts('./_dev/js/adminConfigPage.ts', 'views/js/adminConfigPage.js')
mix.ts('./_dev/js/adminOrderCreatePage.ts', 'views/js/adminOrderCreatePage.js')
mix.ts('./_dev/js/adminOrderDetailPage.ts', 'views/js/adminOrderDetailPage.js')
mix.ts('./_dev/js/mbwayCountdownConfirmPage.ts', 'views/js/mbwayCountdownConfirmPage.js')
mix.ts('./_dev/js/adminAccountSettingsPage.ts', 'views/js/adminAccountSettingsPage.js')
    .webpackConfig({
        resolve: {
          extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
        }
      })
    .sass('./_dev/scss/ifthenpayConfig.scss', 'views/css/ifthenpayConfig.css')
    .sass('./_dev/scss/ifthenpayPaymentMethodSetup.scss', 'views/css/ifthenpayPaymentMethodSetup.css')
    .sass('./_dev/scss/ifthenpayConfirmPage.scss', 'views/css/ifthenpayConfirmPage.css')
    .sass('./_dev/scss/ifthenpayAdminOrder.scss', 'views/css/ifthenpayAdminOrder.css')
    .sass('./_dev/scss/ifthenpayOrderDetail.scss', 'views/css/ifthenpayOrderDetail.css') 
    .sass('./_dev/scss/paymentOptions.scss', 'views/css/paymentOptions.css')
    .options({
        processCssUrls: false
    });
mix.babel(['views/js/adminConfigPage.js'], 'views/js/adminConfigPage.js');
mix.babel(['views/js/adminOrderCreatePage.js'], 'views/js/adminOrderCreatePage.js');
mix.babel(['views/js/adminOrderDetailPage.js'], 'views/js/adminOrderDetailPage.js')
mix.babel(['views/js/mbwayCountdownConfirmPage.js'], 'views/js/mbwayCountdownConfirmPage.js')
mix.babel(['views/js/adminAccountSettingsPage.js'], 'views/js/adminAccountSettingsPage.js')

