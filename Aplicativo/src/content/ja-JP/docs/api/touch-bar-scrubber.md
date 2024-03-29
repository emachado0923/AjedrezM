## クラス: TouchBarScrubber

> スクラバー (スクロールできるセレクタ) を作成します。

プロセス: [Main](../tutorial/application-architecture.md#main-and-renderer-processes)

### `new TouchBarScrubber(options)` *実験的*

* `options` オブジェクト 
  * `items` [ScrubberItem[]](structures/scrubber-item.md) - このスクラバーに配置するアイテムの配列.
  * `select` Function (任意) - ユーザーがタップしたアイテムが、最後にタップしたアイテムではないと呼ばれる。 
    * `selectedIndex` Integer - ユーザが選択したアイテムのインデックス.
  * `highlight` Function (任意) - ユーザが任意のアイテムをタップしたときに呼ばれる. 
    * `highlightedIndex` Integer - ユーザがタッチしたアイテムのインデックス.
  * `selectedStyle` String (任意) - 選択したアイテムのスタイル。省略値は、`null` になります。
  * `overlayStyle` String (任意) - 選択して重なったアイテムのスタイル。省略値は、`null` になります。
  * `showArrowButtons` Boolean (任意) - 省略値は、`false` になります。
  * `mode` String (任意) - 省略値は、`free` になります。
  * `continuous` Boolean (任意) - 省略値は、`true` になります。

### インスタンスプロパティ

`TouchBarScrubber` のインスタンスには以下のプロパティがあります。

#### `touchBarScrubber.items`

このスクラバー内のアイテムを表す `ScrubberItem[]` 配列。 この値を更新すると、タッチバーのコントロールがすぐに更新されます。 この配列の要素の中のプロパティを更新しても **タッチバーは更新されません**。

#### `touchBarScrubber.selectedStyle`

スクラバー内の選択したアイテムのスタイルを表す `String`。この値を更新すると、すぐにタッチバーのコントロールが更新されます。以下は取りうる値です。

* `background` - `[NSScrubberSelectionStyle roundedBackgroundStyle]` に割り当て.
* `outline` - `[NSScrubberSelectionStyle outlineOverlayStyle]` に割り当て.
* `null` - ヌル文字列ではなく、本物の null で、すべてのスタイルを削除します.

#### `touchBarScrubber.overlayStyle`

スクラバー内の選択したアイテムのスタイルを表す `String`。 このスタイルは、その後ろに置かれるのではなく、スクラバーアイテムの上に重ねられます。 この値を更新すると、タッチバーのコントロールがすぐに更新されます。 取りうる値:

* `background` - `[NSScrubberSelectionStyle roundedBackgroundStyle]` に割り当て.
* `outline` - `[NSScrubberSelectionStyle outlineOverlayStyle]` に割り当て.
* `null` - ヌル文字列ではなく、本物の null で、すべてのスタイルを削除します.

#### `touchBarScrubber.showArrowButtons`

このスクラバーに左 / 右の選択矢印を表示するかどうかを表す `Boolean`。この値を更新すると、すぐにタッチバーのコントロールが更新されます。

#### `touchBarScrubber.mode`

このスクラバのモードを表す `String`。この値を更新すると、すぐにタッチバーのコントロールが更新されます。以下は取りうる値です。

* `fixed` - `NSScrubberModeFixed` に割り当て.
* `free` - `NSScrubberModeFree` に割り当て.

#### `touchBarScrubber.continuous`

このスクラバーが連続的であるかどうかを表す `Boolean`。この値を更新すると、すぐにタッチバーのコントロールが更新されます。