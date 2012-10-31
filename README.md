## The Ember Piano

This app shows off Ember's computed properties. The attempt is to play a melody in which the next note / chord is computed automatically based on some simple music theory and a little bit of randomization.

### Progression

* User selects a note to start. 
* `current_chord` is set based on `major_chord_structure`
* `current_scale` computes based on `major_scale_structure`
* `next_note` computes because it is observing `current_note`
* `next_note` is computed when `current_note` changes.
* `next_note` sets `current_note`
* `next_chord` is computed when `current_note` has changed a `x` times || some random matching happens. The next chord is based on `current_chord`.
* `current_scale` is computed when `current_chord` changes.


```coffeescript
# Constants
current_chord:  null
current_note:   null

major_chord_structure =  [1, 3, 4.5]
selected_scale_structure: [1, 2, 3, 3.5, 4.5, 5.5, 6.5, 7]

current_scale:  (->
  @get 'current_chord'
  @get 'selected_scale_structure' 
  # compute scale
).property('current_chord')

next_note: (->
  currentScale = @get 'current_scale'
  newNote = _getNextNote @get('current_note'), currentScale
  @set 'current_note', newNote
).property('current_note', 'current_scale')

next_chord: (->
  if @_readyToMutateChord()
    currentNote = @get 'current_note'
    newChord = _getNextChord(@get('currentChord'))
    @set('current_chord', newChord)
).property('current_chord', 'current_note')

music_player: (->
  if notes.length = 1
    note.playNote()
  else
    notes.playChord()
).property('current_note', 'current_chord')

keys = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8]

# For the UI
notes = {
  {"C":  1    }
  {"Db": 1.5  }
  {"D":  2    }
  {"Eb": 2.5  }
  {"E":  3    }
  {"F":  3.5  }
  {"Gb": 4    }
  {"G":  4.5  }
  {"Ab": 5    }
  {"A":  5.5  }
  {"Bb": 6    }
  {"B:": 6.5  }
}
```