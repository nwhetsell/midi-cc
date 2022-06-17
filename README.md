# MIDI CC

This is a Max for Live MIDI effect inspired by [Bitwig’s MIDI CC device](https://www.bitwig.com/userguide/latest/midi/#midi_cc), and it works with MPE. This device is intended for automating MIDI CC values using track automation instead of clip envelopes. Consequently, it’s unidirectional (the dials don’t update to reflect external MIDI CC changes). If you’re not using MPE, you may be better off using [CC_map8](https://maxforlive.com/library/device/2560/cc-map8).

Note that it seems to be impossible to change device control names after a device is loaded. This means you can’t change a device control name of, for example, “Value 1” to something more descriptive. A workaround is to note the meaning of MIDI CCs in a track’s Info Text.
